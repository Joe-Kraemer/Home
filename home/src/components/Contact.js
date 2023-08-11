import{useInView} from "react-intersection-observer"


const Contact = ({setVisibleSection,headerRef}) =>{
    const{ref} = useInView({
        threshold: 0.5,
        onChange: (inView, entry)=>{
            if(inView){
                setVisibleSection(entry.target.id)
            }
        }
    })
    return(
        <section id="Contact" ref={ref}>
            <div>heading here</div>
            <article>content here</article>
        </section>
    )
}
export default Contact