import React, { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
    return (
        <div className="w-full h-screen bg-neutral-very-dark-blue bg-mobile bg-cover">
            <main className="w-full h-full flex flex-col place-content-center place-items-center p-10 gap-5">
                <div className="bg-neutral-dark-blue w-full p-14 rounded-2xl rounded-tr-[10rem] space-y-10">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
                    <div className="flex gap-5">
                        <div className="bg-neutral-very-dark-blue h-14 w-14 rounded-xl flex place-content-center place-items-center">
                            <img src={`${process.env.PUBLIC_URL}/images/icon-document.svg`} alt="document" />
                        </div>
                        <div className="bg-neutral-very-dark-blue h-14 w-14 rounded-xl flex place-content-center place-items-center">
                            <img src={`${process.env.PUBLIC_URL}/images/icon-folder.svg`} alt="folder" />
                        </div>
                        <div className="bg-neutral-very-dark-blue h-14 w-14 rounded-xl flex place-content-center place-items-center">
                            <img src={`${process.env.PUBLIC_URL}/images/icon-upload.svg`} alt="upload" />
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-dark-blue w-full p-10 rounded-2xl flex flex-col gap-4 relative pb-16 place-items-center">
                    <p className="text-center">
                        You've used <b>815 GB</b> of your storage
                    </p>
                    <div className="w-full h-6 p-1 bg-neutral-very-dark-blue rounded-full">
                        <div className="h-full bg-gradient-to-r from-primary-orange to-primary-pink rounded-full w-3/4 flex p-1 place-items-center place-content-end">
                            <div className="h-3 w-3 bg-white rounded-full justify-self-end"></div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <p>0 GB</p> <p>1000 GB</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl flex place-items-center place-content-center gap-3 font-bold text-neutral-very-dark-blue -bottom-12 absolute">
                        <p className="text-5xl">185</p> <p className="opacity-50">GB LEFT</p>
                    </div>
                </div>
            </main>
        </div>
    );
};
