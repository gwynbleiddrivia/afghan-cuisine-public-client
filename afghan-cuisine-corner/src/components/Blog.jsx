import React from 'react'
import {useLoaderData} from 'react-router-dom'
import Pdf from "react-to-pdf"

const Blog = () => {
		
	const ref = React.createRef();

        const qa = useLoaderData()
        return (
                <div>

				<div className="flex">
					<h1 className="m-auto text-5xl font-bold">Blog for FAQs</h1>
					<Pdf targetRef={ref} filename="BlogForFAQs.pdf">
        {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Generate PDF!</button>}
      </Pdf>

				</div>
			<div ref={ref}>

                        {
						qa.map(singleqa=><div key={singleqa.question}>
    
                                                <div className="mt-8 text-start">

                                                        <div className="bg-success uppercase font-bold p-4 rounded-t-lg">
                                                        {singleqa.question}
                                                        </div>
    
                                                        <div className="border-t border-black"></div>
                                                        <div className="border-t border-black"></div>
                                                        <div className="border-t border-black"></div>
                                                        <div className="border-t border-black"></div>

                                                        <div className="p-4 rounded-b-lg border-b border-r border-l border-black">
                                                        {singleqa.answer}
                                                        </div>

                                                </div>
    
                                        </div>)

                        }
			</div>

                </div>
        );
};

export default Blog;

