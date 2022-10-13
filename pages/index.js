import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BiVolumeFull, BiVolumeMute, BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {

  const [activeCarouselItem, setActiveCarouselItem] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const [activeDetailsPoint, setActiveDetailsPoint] = useState(-1);

  const handleActivePoints = (index) => {
    if (index == activeDetailsPoint) setActiveDetailsPoint(-1);
    else setActiveDetailsPoint(index);
  }

  const nextCarousel = () => {
    if (activeCarouselItem == 1) {
      setActiveCarouselItem(0);
    } else {
      setActiveCarouselItem(1);
    }
  }

  return (
    <div>
      <Head>
        <title>Manee</title>
        <meta name="description" content="The life coach who transformed thousands of people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <nav className={styles.navbar}>
          <div className={`container flex_row space_between align_center`}>
            <Image src="/img/logo-white.png" alt="me" width="125" height="45" />

            <ul className={styles.links}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>

        <div className={styles.home}>
          <div className="container">
            <div className={styles.header}>
              <div className={styles.content}>
                <h1>When masters Speak <span>Miracles</span> Are Born.</h1>
                <button className={styles.btn_primary}>Learn more</button>
              </div>
            </div>
            <div className={styles.carousel}>
              <div className={`${styles.arrow} ${styles.left}`} onClick={nextCarousel}>
                <FaChevronLeft />
              </div>
              <div className={styles.carousel_wrapper}>
                <div className={`${styles.carousel_item} ${activeCarouselItem == 0 ? styles.active : ''}`}>
                  <video src="https://drive.google.com/uc?export=preview&id=1R_FiQnND0ELuwMjVNU_S32eUBXlxI4mi" autoPlay={activeCarouselItem == 0} muted={videoMuted || activeCarouselItem != 0} loop className={styles.video}></video>
                  <div className={styles.icon} onClick={() => setVideoMuted(!videoMuted)}>
                    {
                      videoMuted ? <BiVolumeMute /> : <BiVolumeFull />
                    }
                  </div>
                </div>
                <div className={`${styles.carousel_item} ${styles.carousel_item_with_bg} ${activeCarouselItem == 1 ? styles.active : ''}`}>
                  <div className={styles.content}>
                    <h5>Dr Manu Surendher is a Mentor who helps thousands of people to deposit only positive thoughts in their memory banks.</h5>
                    <h5>He is a Life Coach who believes strongly that love , enthusiasm and never ending consistent improvements will help everyone to be the embodiment of success.</h5>
                  </div>
                </div>
              </div>
              <div className={`${styles.arrow} ${styles.right}`} onClick={nextCarousel}>
                <FaChevronRight />
              </div>
            </div>

            <div className={styles.banner}>
              <h3>The life coach who transformed thousands of people positively.</h3>
              <button className={styles.btn_secondary}>Register now</button>
            </div>
          </div>
        </div>

        <div className={styles.manee}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h2>Manee Captures</h2>
                <p>Program is a life-changing course designed by renowned trainer Dr Manu Surendher. He is the master brain of internationally acclaimed sophisticated psycholinguistic training program to neutralize accents in English all over India. And he is the author of 37 books on various subjects.</p>
                <p>In this live online course you will be learning how to speak good English, how to grow and develop your personality, business development lessons, customer care and customer psychology, leadership excellence, how to develop public speaking skills, and resources to become a good influencing public speaker. Manee has been in this field for more than two decades.</p>
                <p>Over the years we have built up a sterling reputation.</p>
                <p>MANEE is formed to prop where it is deserved. At DMS, we train people to liberate themselves from their limitations.</p>
                <p>Manee is a spirit built up with passion and regulated by discretion.</p>
                <p>We help to take away the fidget of failures to enshrine success by making organized minds. Ultimately people are transformed to lead life fearlessly that they love.</p>
                <h5>Yes, When masters speak miracles are born.</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.program}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h2>When masters speak <br /> <span>Miracles</span> are born</h2>
                <h5>LIVE ONLINE COURSE BY DR. MANU SURENDHER</h5>
                <p>Success  you achieve can be beyond your ken, <br /> if your passion and enthusiasm is boundless.</p>
                <p>Build a new empire of Success  and  learn the science of Success Celebrate your life with  passion. Acquire knowledge and fly high.Shrink off your laziness and break the shed of limitations.;</p>
                <p>Don&apos;t  limit your challenges; Challenge your  limits. Nothing can drag you down, if you  are desirous. Remember,</p>
                <p>you  desire and achieve  through hard work in a smart way. Identify your calibre and your destination.</p>
                <p>Contemplate each and every point. <br />
                  I believe  that there is something  in everything. <br />
                  You can&apos;t do everything you wish, But you can wish what you  can do! No matter what you  were, but it matters what you  are. <br />
                  You create circumstances  to be great not circumstances  create you.</p>
                <p>We believe strongly that miracles take place, where invisible fences are broken and when one truly gets trained. We strive and our vision is to maximize human potential for facing challenges courageously to enhance happiness and attain peace of mind.</p>
              </div>
              <div className={styles.image}>
                <div className={styles.caption}>
                  <h3>Ready to get trained for embracing success?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.breif}>
                <h3>Why is course?</h3>
                <p>learn to transform  your life with positivity.
                  This  is a course which is for the people who love themselves and desire strongly to improve to change their attitude and with a lot to  succeed.
                  The moment you listen to your mentor,  you will start thinking and finally  it will be understood  how ,where, what you have lost.</p>
                <h5>When masters speak <span>Miracles</span> are born</h5>
                <p>Throgh which it is well explained that how to overcome crisis and to be successful.</p>
                <button className={styles.btn_primary}>Register now</button>
              </div>
              <div className={styles.points}>
                <h3>What you will learn: </h3>
                <ul>
                  <li>
                    <div className={styles.head} onClick={() => handleActivePoints(0)}>
                      Creative English
                      {
                        activeDetailsPoint == 0 ? <BiCaretUp /> : <BiCaretDown />
                      }
                    </div>
                    <div className={`${styles.content} ${activeDetailsPoint == 0 && styles.active}`}>
                      Practical English Conversation. <br />
                      Positive Emphatic. <br />
                      Negative questions. <br />
                      Word combinations. <br />
                      Structures. <br />
                      Questions with interrogative words. <br />
                      Word power. <br />
                      Important sentences. <br />
                      Modals and perfect modals. <br />
                      Passive voice. <br />
                      Written and oral examinations
                    </div>
                  </li>
                  <li>
                    <div className={styles.head} onClick={() => handleActivePoints(1)}>
                      Public Speacking
                      {
                        activeDetailsPoint == 1 ? <BiCaretUp /> : <BiCaretDown />
                      }
                    </div>
                    <div className={`${styles.content} ${activeDetailsPoint == 1 && styles.active}`}>
                      We teach: <br />
                      What exactly one should say. <br />
                      Arranging the material in the proper order and with good judgment. <br />
                      Clothing the speech in well-chosen words and carefully phrased sentences. <br />
                      Fixing the speeches in mind. <br />
                      Delivering it with dignity and grace.
                    </div>
                  </li>
                  <li>
                    <div className={styles.head} onClick={() => handleActivePoints(2)}>
                      Customer Care
                      {
                        activeDetailsPoint == 2 ? <BiCaretUp /> : <BiCaretDown />
                      }
                    </div>
                    <div className={`${styles.content} ${activeDetailsPoint == 2 && styles.active}`}>
                      We coach to: <br />
                      Find what customers expect from you. <br />
                      How to beat competitors&apos; offerings. <br />
                      How to think like a customer. <br />
                      Prioritize customer service. <br />
                      How to communicate with customers efficiently. <br />
                      Focus on little things which make a business unique. <br />
                      Treat customers with high respect.
                    </div>
                  </li>
                  <li>
                    <div className={styles.head} onClick={() => handleActivePoints(3)}>
                      Leadership Excellence
                      {
                        activeDetailsPoint == 3 ? <BiCaretUp /> : <BiCaretDown />
                      }
                    </div>
                    <div className={`${styles.content} ${activeDetailsPoint == 3 && styles.active}`}>
                      We train people to achieve their visions by challenging, encouraging, enabling, coaching, and being models for their leadership, team, and followers.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonials}>
          <div className="container">
            <div className={styles.wrapper}>
              <h2>Exploring Success</h2>
              <div className="flex_row align_center">
                <div className={styles.box}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit maiores harum qui, aperiam reiciendis, itaque dignissimos nihil in omnis pariatur minima iusto animi.</p>
                  <h5>John Doe, Entreprenuer</h5>
                </div>
                <div className={styles.box}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit maiores harum qui, aperiam reiciendis, itaque dignissimos nihil in omnis pariatur minima iusto animi.</p>
                  <h5>John Doe, Entreprenuer</h5>
                </div>
                <div className={styles.box}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit maiores harum qui, aperiam reiciendis, itaque dignissimos nihil in omnis pariatur minima iusto animi.</p>
                  <h5>John Doe, Entreprenuer</h5>
                </div>
                <div className={styles.box}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit maiores harum qui, aperiam reiciendis, itaque dignissimos nihil in omnis pariatur minima iusto animi.</p>
                  <h5>John Doe, Entreprenuer</h5>
                </div>
                <div className={styles.box}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit maiores harum qui, aperiam reiciendis, itaque dignissimos nihil in omnis pariatur minima iusto animi.</p>
                  <h5>John Doe, Entreprenuer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className="container">
            <div className="flex_row align_center space_between">
              <div className={styles.item}>
                <h3>Years of Experience</h3>
                <h2>20</h2>
              </div>
              <div className={styles.item}>
                <h3>Live Workshops</h3>
                <h2>700+</h2>
              </div>
              <div className={styles.item}>
                <h3>People Addressed &amp; Mentored</h3>
                <h2>2,00000+</h2>
              </div>
              <div className={styles.item}>
                <h3>Online Live Sessions</h3>
                <h2>100+</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.videos}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h2>If you don&apos;t start now... when?</h2>
                <p>Efforts have been made to this course entitled &quot;When masters speak miracles are born&quot; But perfection belies in you.</p>
                <iframe className={styles.iframe_interview} src="https://drive.google.com/file/d/1_6rmIrGfE9mPsVlqWopt56Yq3RyDnVS6/preview" allow="autoplay"></iframe>
                <iframe className={styles.iframe_interview} src="https://drive.google.com/file/d/1eCL1YvY2EtasGGOe_z2LBMjIJBTpB6JB/preview" allow="autoplay"></iframe>
              </div>
            </div>
            <div className={styles.banner}>
              <h3>Inspiring your rhetoric.</h3>
              <button className={styles.btn_secondary}>Register now</button>
            </div>
          </div>
        </div>

        <div className={styles.interview}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h2>Interview with Dr Manu Surendher</h2>
                <iframe className={styles.iframe_interview} src="https://drive.google.com/file/d/1dbvMvmb3zbnjyYwvJOcz-E5I-xtPGLqY/preview" allow="autoplay"></iframe>
                <iframe className={styles.iframe_interview} src="https://drive.google.com/file/d/1TQDekKZPneW1QQEXGXo6ETptMzZzqgiJ/preview" allow="autoplay"></iframe> <br />
                <button className={`${styles.btn_primary} ${styles.btn_active}`}>Register Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.business}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h2>For Business</h2>
                <h5>Transform your team</h5>
                <p>Consistent training will help enrich your team to have integrity in the organization. The team can make miracles but they must be trained. </p>
                <p>We help them to become the best version of themselves, so they give the best they can. </p>
                <p>An entrepreneur improves his organization by providing great training to his employees. </p>
                <p>The best way to stick your team with you and your organization ever is to provide them the right training which helps to improve their personal life and professional enrichment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.banner_fluid}>
          <div className="container">
            <h2>When masters speak miracles are born.</h2>
          </div>
        </div>

        <div className={styles.contact}>
          <div className="container">
            <div className={styles.content}>
              <h2>Know your future now</h2>
              <form action="#">
                <div className="flex_row align_center">
                  <div className={styles.input_group}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' />
                  </div>
                  <div className={styles.input_group}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />
                  </div>
                </div>
                <button className={styles.btn_primary}>Register</button>
              </form>
            </div>
          </div>
        </div>

      </main >

      <footer className={styles.footer}>
        <div className={styles.head}>
          <div className="container">
            Pain is my teacher.
          </div>
        </div>
        <div className={styles.content}>
          <div className="container">
            <div className='flex_row align_center space_between'>
              <div className={styles.social}>
                <h4>Follow Dr. Manu Surendher</h4>
                <ul>
                  <li><a href="#"><FaFacebook /></a></li>
                  <li><a href="#"><FaYoutube /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                </ul>
              </div>
              <div className={styles.whatsapp}>
                <a href="#">
                  <FaWhatsapp />
                  +91 8105254855
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}
