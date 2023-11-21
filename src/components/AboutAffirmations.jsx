
const AboutAffirmation = () => {

    return (
        <>
                {/* <section className="addAffirmation pt-4 pb-4"> */}
                <section className="traditional__layout addAffirmation">
                    <h1 className="text-3xl font-bold text-purple-600 pb-2">
                        About this application
                    </h1>
                    <div className="about">
                        <p className="pb-3">This application gives you an editable slideshow of affirmations for your inspirational viewing pleasure.</p>
                        <p className="pb-3">Feel free to <i>add</i> your own affirmations, <i>edit</i> existing ones, <i>erase</i> them all to start from scratch, and <i>load</i> in the default affirmations that you started with.</p>
                        <p className="pb-3">LocalStorage is being used to save your affirmations. This means that the application will only save your progress if you keep viewing it in the same browser. You don't really have to know this, but now you do!</p>
                    </div>
                </section>
        </>
    )
}
export default AboutAffirmation;