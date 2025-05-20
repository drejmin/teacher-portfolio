import { useEffect, useRef } from "react"
import { Button } from "./components/ui/button"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"
import { ScrollArea } from "./components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"



export default function App() {
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            '*'
          )
        }
      },
      { threshold: 0.5 }
    )

    const current = videoRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="text-foreground font-mono transition-colors duration-500 ease-in-out min-h-screen w-full flex flex-col items-center">
      <header
        className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 z-50"
      >
        <nav className="max-w-4xl mx-auto flex justify-between items-center p-4 text-black">
          <ul className="flex space-x-2 text-sm md:text-base">
            <li>
              <Button
                variant="ghost"
                asChild
                className="transition-shadow duration-300 hover:shadow-md hover:shadow-black"
              >
                <a href="#bio" >Bio</a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className="transition-shadow duration-300 hover:shadow-md hover:shadow-black"
              >
                <a href="#why" >Why I Teach</a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className="transition-shadow duration-300 hover:shadow-md hover:shadow-black"
              >
                <a href="#reflections">Reflections</a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className="transition-shadow duration-300 hover:shadow-md hover:shadow-black"
              >
                <a href="#artifacts">Artifacts</a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className="transition-shadow duration-300 hover:shadow-md hover:shadow-black"
              >
                <a href="#goals">Goals</a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                asChild
                className="transition-shadow duration-300 hover:shadow-md hover:shadow-black"
              >
                <a href="#contact">Contact</a>
              </Button>
            </li>
          </ul>
          <ModeToggle />
        </nav>
      </header>

      <main className="pt-20 snap-y snap-mandatory overflow-y-auto w-full flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto space-y-16">
          <section
            id="bio"
            className="snap-start w-full h-screen flex items-center justify-center text-center bg-white dark:bg-zinc-900"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091870622-1e7e6a5eab48')" }}
          >
            <div className="w-full h-full px-4 md:px-6 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold mb-6">Welcome</h1>
              <p className="mb-6 max-w-xl">
                Hello my name is DeAndre Minor. I am a high school mathematics educator committed to building student-centered learning 
                environments rooted in equity, academic rigor, and college readiness. My classroom blends mathematical
                logic, real-world applications, and creativity to help students grow into capable, confident thinkers. I teach Illustrative Math 3 and 
                Illustrative math 3 honors, which is a mix of Geometry and Algebra II with a sprinkles of Pre-Calculus built in. The class is predominantly 
                juniors, however I do also have sophmores and seniors.
              </p>
              {/* <p className="max-w-xl">(A space for profile photo will be included here.)</p> */}
              <img
                src="https://i.imgur.com/7yzWdOi.jpeg"
                alt="DeAndre Minor"
                className="rounded-full w-48 h-48 object-cover mt-4"
              />
            </div>
          </section>

          <section id="why" className="snap-start w-full h-135 px-4 md:px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h1 className="text-2xl font-bold mb-6">Why I Teach</h1>
            <div className="w-full h-full">
             <iframe
              ref={videoRef}
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/mUV6g_eAFz8?enablejsapi=1"
              title="Why I Teach"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            </div>
          </section>

          <section id="reflections" className="snap-start w-full h-screen px-4 md:px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">CSTP Growth and Development</h2>
            <tr className="list-disc list-inside space-y-3 max-w-xl text-left">
              <td>
                <ScrollArea className="h-[300px] w-full p-4">
                  <Accordion type="single" collapsible className="w-full max-w-2xl">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-black dark:text-black">Strengths</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Creating a Positive, Inclusive Learning Environment:</strong> I foster an academically rigorous, culturally responsive,
                         and emotionally safe classroom where students are taught to and expected to take ownership of their learning and learning environment.</p>
                        <p><strong>Ongoing Professional Growth:</strong> By taking moments to self-reflect and set goals for the future centered on student needs 
                        and instructional data I push to become a better educator. I actively collaborate with my colleagues, my math lead and reach out to families in 
                        order to better support student success.</p>
                        <p><strong>Assessment for Learning:</strong> I design and implement diverse assessments that guide instruction and empower students to reflect 
                        on their progress. Students are regularly involved in goal setting and self-assessment, through one-on-one meetings, and I use data and technology 
                        to monitor and adjust instruction when it is necessary.</p>
                        <p><strong>Instructional Planning and Content Knowledge:</strong> My lessons are scaffolded so that the push is on students to advocate more for themselves, 
                        they are aligned to standards, and culturally relevant. I integrate real-world problems to deepen student understanding and attempt to connect students' prior knowledge to 
                        what they are expected to learn in order to ensure access for all learners.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-black dark:text-black">Opportunities for Growth</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Advancing Toward Innovation:</strong> My next step is moving beyond consistency into innovation—encouraging greater student and family leadership in 
                        classroom norms, learning design, and school culture. I have realized that I need to open my classroom up more to create a more robust student centered environment 
                        with the help of parents and my fellow educators. I struggled this year to develop my own content while delving into this curriculum and now that I am more comfortable
                        I would like to expand outwards while bringing in all those around me.</p>
                        <p><strong>Elevating Student Agency:</strong> I aim to expand opportunities for students to take the lead in analyzing their own learning, setting academic goals, 
                        and designing inquiry-based projects. Due to my inability to properly assess students in the beginning of the school year I struggled to find a place where giving students
                        the trust and agency to improve on their own was halted for an extended period. Although I was able to get some students on board I missed a large chunk of students who would 
                        benefit from the development of their self agency.</p>
                        <p><strong>Scaling Impact Through Leadership:</strong> I plan to further my growth by contributing to school-wide initiatives and supporting professional learning communities 
                        that drive instructional improvement. I want the school that I am at to be a top perfoming institution where students who attend leave with the skills and knowledge to 
                        comfortably thrive in their college and career goals. The only way to do that is to improve myself while contributing what I've learned to the community on whole.
                        </p>
                        <p><strong>Enhancing “Right-on-Time” Questioning and Clarity Without Compromising Rigor:</strong> 
                        While I consistently design standards-aligned, cognitively demanding lessons, one area of growth involves refining my ability to ask timely, purposeful questions that surface 
                        student thinking in the moment. My goal is to better anticipate common misconceptions and respond with probing questions that guide learners forward without simplifying the 
                        content. Additionally, I want to improve how I present complex concepts in a more accessible way—using analogies, models, and real-world contexts—while maintaining high 
                        expectations for all students.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-black dark:text-black">What Surprised Me</AccordionTrigger>
                      <AccordionContent>
                        <p><strong>Communication: </strong>Embedding culturally responsive practices in behavior systems, holding high levels of rigor in instruction, and communication with both students and parents 
                          has become a defining element of my teaching identity. Students have gotten a lot more comfortable asking questions and seeking help from both their peers and myself, 
                          they actively work on improving their grades through retakes and in communicating to parents I have been able to get more parents advocating for their child and more students 
                          attending office hours.</p>
                          <br></br>
                        <p>I’ve grown better at using data to adapt instruction in real time—meeting academic and emotional needs while maintaining high expectations for every learner. This used to be
                          a real challenge for me and I still struggle with forming the proper questions but I have, over time become more aware of when to step back and what to review.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollArea>
              </td>
            </tr>
          </section>

          <section id="artifacts" className="snap-start w-full h-screen px-4 md:px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">Impact on Student Success</h2>
            <Carousel>
              <CarouselContent>
                <CarouselItem> <img
                    src="https://i.imgur.com/oSaJWVH.jpeg"
                    alt="Student Work Example 1"
                    className="w-full h-[600px] object-contain rounded-md"
                  />
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Student work showing application of logarithmic rules.
                  </p></CarouselItem>
                <CarouselItem>
                  <img
                    src="https://i.imgur.com/QqPw1lg.jpeg"
                    alt="Student Work Example 1"
                    className="w-full h-[600px] object-contain rounded-md"
                  />
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Student work showing application of logarithmic rules.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-[600px]">
                    <iframe
                      src="/Secondary Math Lesson Plan Rubric.docx.pdf"
                      className="w-full h-full rounded-md"
                      title="Math Lesson Plan Rubric"
                    />
                  </div>
                  <p className="mt-4 text-center font-black text-sm text-muted-foreground">
                    This rubric outlines expectations for effective secondary math lesson planning. It was
                    developed in response to planning for various aspects of the lesson and aligning them for every
                    CSTP.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-[600px]">
                    <iframe
                      src="https://i.imgur.com/YK5KTDj.jpeg"
                      className="w-full h-full rounded-md"
                      title="Math Lesson Exemplar"
                    />
                  </div>
                  <p className="mt-4 text-center font-black text-sm text-muted-foreground">
                    This exemplar was created by working through student material and helped to plan out what would be expected from students 
                    and how to better cover the standard that was being set as the focus.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-[600px]">
                    <iframe
                      src="https://i.imgur.com/vi54dqM.jpeg"
                      className="w-full h-full rounded-md"
                      title="Math Lesson slide Deck"
                    />
                  </div>
                  <p className="mt-4 text-center font-black text-sm text-muted-foreground">
                    This slide deck was created after working through student material and planning out what would be expected from students 
                    and what standard is being set as the focus.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-[600px]">
                    <iframe
                      src="https://i.imgur.com/unIS7zJ.jpeg"
                      className="w-full h-full rounded-md"
                      title="Exit Slip Exemplar"
                    />
                  </div>
                  <p className="mt-4 text-center font-black text-sm text-muted-foreground">
                    This is a fully worked through exit slip for a previous lesson.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-[600px]">
                    <iframe
                      src="https://i.imgur.com/GsTDV2g.jpeg"
                      className="w-full h-full rounded-md"
                      title="Math Lesson Plan Rubric"
                    />
                  </div>
                  <p className="mt-4 text-center font-black text-sm text-muted-foreground">
                  This was created when reaching out to parents for them to aid their children in 
                  the subject. 
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-[600px]">
                    <iframe
                      src="https://i.imgur.com/3yGIP2O.jpeg"
                      className="w-full h-full rounded-md"
                      title="Math Lesson Plan Rubric"
                    />
                  </div>
                  <p className="mt-4 text-center font-black text-sm text-muted-foreground">
                    This was created when reaching out to parents for them to aid their children in 
                  the subject. 
                  </p>
                </CarouselItem>
               </CarouselContent>
              <CarouselPrevious className='text-black'/>
            <CarouselNext className='text-black'/>
          </Carousel>
          </section>

          <section id="goals" className="snap-start w-full h-screen px-4 md:px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">Goals & Next Steps</h2>
            <ul className="list-disc list-inside space-y-3 max-w-xl text-left">
              <li>Strengthen my use of differentiated instruction and formative assessment tools.</li>
              <li>Integrate real-world applications in math through project-based learning.</li>
              <li>Build stronger family-school communication strategies.</li>
              <li>Continue refining restorative practices in classroom management.</li>
              <li>Expand my use of technology to support student reflection and voice.</li>
            </ul>
          </section>

          <section id="contact" className="snap-start w-full h-screen px-4 md:px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">Contact</h2>
            <p className="mb-2">Email: dminor@laalliance.org</p>
          </section>
        </div>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DeAndre Minor. All rights reserved.
      </footer>
    </div>
    </ThemeProvider>
  )
}