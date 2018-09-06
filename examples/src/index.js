import React from 'react'
import ReactDOM from 'react-dom'
import LazyImage from '../../src/index'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <article className="article-wrapper">
          <h1>
            The Making of Apple’s Emoji: How designing these tiny icons changed
            my life
          </h1>
          <p>
            When design leads to friendship, and that friendship leads back to
            design, magic happens. This is the story of how an intern and her
            mentor designed Apple’s original emoji set and together changed the
            way people communicate around the world. It was also a project that
            led them to become lifelong friends, a key ingredient in the success
            of these tiny icons. In a nutshell, I was the intern and Raymond is
            my lifelong friend and mentor. In the course of three months,
            together we created some of the most widely used emoji: face with
            tears of joy, pile of poo, red heart, and party popper, plus around
            460 additional ones. Later, as a full time Apple employee, I even
            got to create a few more.
          </p>

          <LazyImage
            source="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            placeholder="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            width={640}
            height={320}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>

          <p>
            It was the summer of 2008, and I was one year away from receiving my
            MFA in Graphic Design from the Rhode Island School of Design (RISD).
            It was the same summer I landed an internship at Apple on a team I
            was eager to meet. The same design team responsible for the iPhone;
            a magical device that launched the year prior at Macworld Expo in
            San Francisco. One could only imagine the size of my butterflies as
            I flew to Cupertino and arrived at 1 Infinite Loop. To add to the
            uncontrollable fluttering, I had no idea what project I would be
            given, the size of the team, where I would sit, or if I could really
            bike to work (I’m terrible on bikes).
          </p>

          <LazyImage
            source="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            placeholder="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            width={640}
            height={426}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>

          <p>
            Soon after my arrival and meeting the team (oh and biking to work!)
            I was handed my project. I was still trying to make sense of the
            assignment I’d just received when someone asked if I knew what an
            emoji was. And well, I didn’t, and at the time, neither did the
            majority of the English speaking world. I answered ‘no’. This would
            all change, of course, as the iPhone would soon popularize them
            globally by offering an emoji keyboard. Moments later I learned what
            this Japanese word meant and that I was to draw hundreds of them.
            Just as I was looking down the hallway and internally processing,
            “This isn’t type or an exercise in layout, these are luscious
            illustrations,” I was assigned my mentor.
          </p>
          <LazyImage
            source="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            placeholder="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            width={640}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>
          <LazyImage
            source="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            placeholder="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            width={640}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>
          <p>
            For the next three months Raymond and I would share an office and
            illustrated an array of faces, places, flags, animals, food,
            clothing, symbols, holidays, sports, and well, you probably know the
            rest. But long before any of this was complete, I had to learn how
            to design Apple-styled icons. We split the batch and the lesson in
            humility and craftsmanship began.
          </p>

          <p>
            For the next three months Raymond and I would share an office and
            illustrated an array of faces, places, flags, animals, food,
            clothing, symbols, holidays, sports, and well, you probably know the
            rest. But long before any of this was complete, I had to learn how
            to design Apple-styled icons. We split the batch and the lesson in
            humility and craftsmanship began.
          </p>
          <LazyImage
            source="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            placeholder="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            width={640}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>
          <p>
            Soon after my arrival and meeting the team (oh and biking to work!)
            I was handed my project. I was still trying to make sense of the
            assignment I’d just received when someone asked if I knew what an
            emoji was. And well, I didn’t, and at the time, neither did the
            majority of the English speaking world. I answered ‘no’. This would
            all change, of course, as the iPhone would soon popularize them
            globally by offering an emoji keyboard. Moments later I learned what
            this Japanese word meant and that I was to draw hundreds of them.
            Just as I was looking down the hallway and internally processing,
            “This isn’t type or an exercise in layout, these are luscious
            illustrations,” I was assigned my mentor.
          </p>
          <LazyImage
            source="https://wpimg.wallstcn.com/6aefd3ee-c05c-4537-8f77-64712c7b9648.jpg"
            placeholder="https://wpimg.wallstcn.com/09b75d36-bc7d-443e-aa59-7c92d9c124b2.jpg?imageView2/1/w/51/h/29"
            width={640}
            height={416}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>
          <p>
            For the next three months Raymond and I would share an office and
            illustrated an array of faces, places, flags, animals, food,
            clothing, symbols, holidays, sports, and well, you probably know the
            rest. But long before any of this was complete, I had to learn how
            to design Apple-styled icons. We split the batch and the lesson in
            humility and craftsmanship began.
          </p>
        </article>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
