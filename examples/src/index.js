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
            source="https://wpimg.wallstcn.com/7868b54f-1e16-479e-a817-0dc91ef5926f.png?imageView2/1/w/370/h/180"
            placeholder="https://wpimg.wallstcn.com/7868b54f-1e16-479e-a817-0dc91ef5926f.png?imageView2/1/w/37/h/18"
            width={370}
            height={180}
            placeholderWidth={37}
            placeholderHeight={18}
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
            source="https://wpimg.wallstcn.com/56a9580b-1d17-41d8-ba73-cb052ba1b529.jpg?imageView2/1/w/250/h/160"
            placeholder="https://wpimg.wallstcn.com/56a9580b-1d17-41d8-ba73-cb052ba1b529.jpg?imageView2/1/w/25/h/16"
            width={250}
            height={160}
            placeholderWidth={25}
            placeholderHeight={16}
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
            source="https://wpimg.wallstcn.com/8266afb7-26bd-4554-9dba-9add2d995242.jpg?imageView2/1/w/370/h/180"
            placeholder="https://wpimg.wallstcn.com/8266afb7-26bd-4554-9dba-9add2d995242.jpg?imageView2/1/w/37/h/18"
            width={370}
            height={180}
            placeholderWidth={37}
            placeholderHeight={18}
          >
            {({ source, alt }) => <img src={source} alt={alt} />}
          </LazyImage>
          <LazyImage
            source="https://wpimg.wallstcn.com/869efc6b-6046-485f-9cb6-2e0cf66cc5c1.jpg?imageView2/1/w/750/h/300"
            placeholder="https://wpimg.wallstcn.com/869efc6b-6046-485f-9cb6-2e0cf66cc5c1.jpg?imageView2/1/w/75/h/30"
            width={750}
            height={300}
            placeholderWidth={75}
            placeholderHeight={30}
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
            source="https://wpimg.wallstcn.com/c4554286-551a-4d8b-89c4-fd0ce160efc3.jpg?imageView2/1/w/370/h/180"
            placeholder="https://wpimg.wallstcn.com/c4554286-551a-4d8b-89c4-fd0ce160efc3.jpg?imageView2/1/w/37/h/18"
            width={370}
            height={180}
            placeholderWidth={37}
            placeholderHeight={18}
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
            source="https://wpimg.wallstcn.com/b467af46-3835-43f1-be3c-b25f10c9c31c.jpg?imageView2/1/w/370/h/180"
            placeholder="https://wpimg.wallstcn.com/b467af46-3835-43f1-be3c-b25f10c9c31c.jpg?imageView2/1/w/37/h/18"
            width={370}
            height={180}
            placeholderWidth={37}
            placeholderHeight={18}
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
