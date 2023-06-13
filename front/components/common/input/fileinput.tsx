import { Icon } from '@iconify/react';
import request from '@utils/request';


interface FileInputProps {
    state: string;
    setState: (state: string) => void;
}

export const FileInputBox = ({ state, setState }: FileInputProps) => {

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const body = new FormData();
        body.append("file", file);

        try {
            const { data } = await request.post("file/upload", body, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setState(data.fileUrl);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 overflow-hidden rounded-lg">
                    {(state)
                        ? <img src={state} />
                        :
                        <><Icon icon="bx:image-add" className="w-12 h-12 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">이미지 파일을 선택해주세요</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF (최대 1MB)</p>
                        </>
                    }
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
        </div>
    )
}