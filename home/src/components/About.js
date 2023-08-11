import{useInView} from "react-intersection-observer"


const About = ({setVisibleSection,headerRef}) =>{
    const{ref} = useInView({
        threshold: 0.5,
        onChange: (inView, entry)=>{
            if(inView){
                setVisibleSection(entry.target.id)
            }
        }
    })
    return(
        <section id="About" ref={ref}>
            <div>heading here</div>
            <article>content here</article>
        </section>
    )
}
export default About