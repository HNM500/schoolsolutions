import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const MultilingualIdentitiesArticle: React.FC = () => {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Honouring students' multilingual repertoires and identities | GCC Education</title>
        <meta name="description" content="Vally Lytra, Soukeina Tharoo and colleagues explore the paradox of multilingualism in international schools. Published in EAL Journal, Autumn 2020." />
        <link rel="canonical" href="https://gcceducation.com/resources/multilingual-identities" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-amber-500 text-slate-900 mb-6">
            EAL Journal | Autumn 2020
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Honouring students' multilingual repertoires and identities
          </h1>
          <p className="text-amber-500 text-xl md:text-2xl italic mb-8">Our languages, our stories</p>
          <Separator className="w-16 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Vally Lytra, Soukeina Tharoo, Emanuela Banfi, Zhan Chengyan, Carla Costa, Maria Eleftheriou-Kaparti, Zoe Meyer and Polina Schmid-Ilina</span> explore the paradox of multilingualism in international schools
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed text-lg first-letter:text-5xl first-letter:font-serif first-letter:text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              International schools are important sites of multilingualism. They pride themselves on educating a linguistically and culturally diverse student population and on fostering intercultural understanding through an appreciation of students' identities and cultures as well as those of the wider community. While students' cultures and heritages take centre stage in planned whole-school events, such as International Day, and in school-sponsored cultural and religious celebrations, we have observed that their rich language and cultural repertoires and experiences tend to be less visible and audible as resources for learning in everyday school life.
            </p>

            <p className="text-slate-600 leading-relaxed">
              In other words, international schools recognise and celebrate students' lived multilingualism. However, students' multilingual abilities and knowledge are not consistently leveraged and integrated in pedagogic routines and practices in systematic ways. Our observations reminded us of studies in mainstream state schools in the UK that have highlighted a tokenistic approach to linguistic diversity (Bourne 2001; Welply 2017; Cunningham 2019). Our "Home Language Collaborative Project" sought to problematise this inherent contradiction by moving beyond a mere acknowledgement of multilingualism to exploring how students can deploy their multilingual repertoires and identities in the home language classroom and experience their home language learning from a "language-as-a-resource" perspective (Ruiz 1984).
            </p>
          </div>

          {/* Section: Setting the Scene */}
          <section className="mt-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Setting the scene</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed">
                Our project was conducted between November 2019 and February 2020 at the International School of Lausanne, in Switzerland. Switzerland is an officially multilingual country and has four national languages (German, French, Italian and Romansh). The school is located in one of the French-speaking Cantons (Canton de Vaud). According to cantonal statistics, since the early 2000s, the region has experienced high levels of international mobility and migration transforming the Canton into one of the most linguistically and culturally rich areas in Switzerland, with one in three residents being non-Swiss nationals.
              </p>

              <p className="leading-relaxed">
                The International School of Lausanne is a non-profit, English-medium IB (International Baccalaureate) school for students aged between 3 to 18. Although the majority of students have English as their dominant school language (approximately 60%), students speak a number of additional languages. The school has a robust EAL (English as an Additional Language) programme and supports students' additional language learning. French is taught as the first foreign language from the age of 3 and students study German or Spanish as a second foreign language in Year 8 (age 12) for a minimum of two years. Moreover, the school facilitates a separate fee-paying Home Language Programme as part of its after-school, extra-curricular provision. During the project, the programme had 45 registered students and 9 qualified language teachers offering classes in Italian, Mandarin, Greek, Russian, German, Dutch, Turkish, Portuguese and French. The majority of the students were in the primary school. 30 students and 6 teachers chose to participate in the project.
              </p>

              <p className="leading-relaxed">
                We conceived the project as an opportunity to valorise home language teaching and learning and raise the visibility of the home language programme for the whole school. With this in mind, first, we aimed to create a collaborative and collegial culture among home language teachers based on dialogue and reciprocity. We were aware that both the programme and the teachers held a marginal position in the school. Teachers had limited interactions with each other and with other teachers. Although the school provides administrative support and material resources, teachers work independently: they set learning objectives, design curriculum content and choose pedagogic methods and approaches for their classes. We sought to build a professional learning community to enable collaboration and to share, develop and enhance pedagogic practice through a reflective approach.
              </p>

              <p className="leading-relaxed">
                The second aim was to work with teachers to develop a repertoire of teaching approaches that emphasised teacher-student collaboration and a learner centred orientation to home language and literacy learning. Conceptually, the project was inspired by a dynamic view of bilingualism where language users draw upon their entire language repertoires and meaning-making modes in an integrated way for communication, learning, belonging and well-being (García and Sylvan 2011). Drawing on research on translanguaging as pedagogy (García and Li 2014), these teaching approaches aspired to create learning arrangements where students could critically reflect upon, interrogate and integrate their diverse languages and cultural experiences as an integral part of their language and literacy activities in the home language classroom.
              </p>

              <p className="leading-relaxed">
                These activities aimed to develop students' language and literacy skills in the home language and to valorise their multilingual identities and the normalcy of their multilingual experiences that often fade into the background in their everyday school lives. They aligned with biographical approaches to applied linguistics and language education that take as their starting point a speaker-oriented perspective, "the perspective of the experiencing and speaking subject" (Busch 2017: 46). The outcome of these activities was a series of multimodal texts under the topic: "Our languages, our stories".
              </p>
            </div>
          </section>

          {/* Section: Collaborative text-making */}
          <section className="mt-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Collaborative text-making: "Our languages, our stories"</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed">
                We met with the 6 participating home language teachers four times (roughly once a month), first, to introduce the project and its theoretical and pedagogical principles, to familiarise teachers with pedagogic practices in the school and with the PYP (Primary Years Programme) curriculum to consider possible links between the project and the curriculum, and to experiment with a range of visual and other methods and resources. Subsequent meetings focused on the process of developing the project and the challenges and opportunities teachers and students had encountered. The home language teachers worked with their students over two months to co-design and co-produce the multimodal texts to present to and share with the entire school to celebrate International Mother Tongue Day (February 21, 2020). After the project was completed, we conducted post-production individual discussions with teachers and group discussions with students.
              </p>

              <p className="leading-relaxed">
                From the onset, teachers sought to activate students' diverse and complex language and cultural knowledge as a resource for learning and to enhance a sense of agency, empowerment and ownership of their work. Reflecting on how she shifted her pedagogical stance to make it more responsive to her students' experiences and desires, Carla, the Portuguese home language teacher, described her understanding of students as knowledgeable and active meaning-makers and her commitment to making their voices heard. This pedagogical stance required a repositioning of her role from transmitter of curriculum content to co-learner and co-designer.
              </p>

              <blockquote className="border-l-4 border-indigo-500 bg-slate-50 p-6 my-8 italic text-slate-600 rounded-r-lg">
                "I let my students include in their work what was most significant for them. This was a new experience for them and for me. I let go to see what they would accomplish. I kept it open-ended. I'm very proud of what they have done."
              </blockquote>

              <p className="leading-relaxed">
                In the Portuguese classes, 5 students aged 10-11 years old drafted letters to a Portuguese idol of their choice, somebody they admired and respected. Vincent, Salvador and Antonio chose to write letters to Portuguese football players. "Ronaldo is the best player in the world and I play a lot of football too" explained Vincent. Antonio added that he had chosen João Félix because he had played for his hometown team, Benfica. The other two students addressed their letters to their mother and to a famous TV chef. Students then sent their letters to their idols via email and social media (Facebook and Instagram) and wrote guided personal reflections.
              </p>

              <p className="leading-relaxed">
                The learning objectives of the letter writing activity entitled "Carta do meu ídolo" (Letter to my idol) went beyond merely practicing how to draft a formal letter in Portuguese using appropriate syntax and lexis. Carla wanted her students to invest in their Portuguese language learning, to build a connection to aspects of their home culture and affirm their developing language identities. As she stressed:
              </p>

              <blockquote className="border-l-4 border-indigo-500 bg-slate-50 p-6 my-8 italic text-slate-600 rounded-r-lg">
                "I wanted them not to be scared to expose themselves, to express themselves in their mother tongue, to try and express themselves in Portuguese, to speak in Portuguese. They speak better than they thought they did before the project."
              </blockquote>
            </div>
          </section>

          {/* Section: Leveraging students' meaning-making resources */}
          <section className="mt-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Leveraging students' entire meaning-making resources</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed">
                Presenting the text-making to the whole school brought to the fore the following challenge: students discussed and debated ways to create texts that would be accessible to the school community whose members do not understand or speak Portuguese, Italian or Greek. Some students were initially reluctant about presenting their work to the whole school. Although international schools go to great lengths to emphasise the importance of home language maintenance and development in their school language policy, our observations suggested that students often perceive their home languages as a very private matter that is separate and disconnected from their everyday school lives. Moreover, students seem to regard home language learning as a form of informal learning, "a private lesson" as Maria (the Greek home language teacher) pointed out that does not appear to enjoy the same level of visibility or status in the school as other forms of curricular and extracurricular activities.
              </p>

              <p className="leading-relaxed">
                One way of addressing this challenge was by students leveraging their digital literacies and shared popular culture references. The group of Portuguese students worked together to create a poster entitled "Um pouco de nós" (A little of us) with images they thought best represented Portugal, adding labels in Portuguese. To contextualise their poster, Antonio created a QR code with a presentation of Portugal in English he produced in his EAL class. To complete their text-making they created another poster inspired by the Disney film "Finding Nemo". They chose to present one of the most popular songs "Continue a nadar" (Keep swimming). Interestingly, the message of the song is about keep trying and not giving up, perhaps a nod to their own language learning trajectories. The students personalised the song by dedicating it to somebody they care for. They used QR codes to include two clips from the movie in its original English version for the benefit of their non-Portuguese speaking peers.
              </p>

              {/* Image 1: Lily's language portrait */}
              <figure className="my-10">
                <div className="bg-slate-50 p-4 rounded-lg shadow-lg">
                  <img
                    src="/Soukeina_Article_Image1.png"
                    alt="Lily's language portrait and autobiographical language narrative"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-4 italic">
                  Image 1: Lily's language portrait and autobiographical language narrative
                </figcaption>
              </figure>

              <p className="leading-relaxed">
                Other students drew explicitly and purposefully on the meaning-making potential of their bilingual/multilingual resources and literacies. Two secondary students studying Italian made a collage with images and autobiographical narratives in Italian followed by English translations mapping out the web of their multilingual language practices and how they were connected with different people, places and activities in their transnational lives.
              </p>

              <p className="leading-relaxed">
                Two primary students studying French created texts that creatively juxtaposed their different linguistic resources. Lilly (age 8) annotated her language portrait (Mon portrait langagier) in English accompanied by an autobiographical narrative "Les langues que je parle" (The languages I speak). In her narrative, she remarked on the ubiquitous presence of German in products sold in supermarkets reflecting how this has to do with the fact that "in Switzerland people speak German". Lilly added a QR code next to her narrative with a note "scan me so that you can hear my presentation :)". She proudly concluded her narrative with the following words: <em>"Tous les langues que je parle je les adore. J'aimerai en apprendre d'autres"</em> (I love all the languages I speak, and I would love to learn other languages).
              </p>

              <p className="leading-relaxed">
                In a similar vein, when we asked six-year-old Nina what she would have done differently in her poster documenting her favourite books across three languages (Italian, Russian and English) without hesitation, she remarked: "Add another paper with a French book so that I have all four languages".
              </p>

              {/* Image 2: Nina's poster */}
              <figure className="my-10">
                <div className="bg-slate-50 p-4 rounded-lg shadow-lg">
                  <img
                    src="/Soukeina_Article_Image2.png"
                    alt="Nina's poster featuring her favourite books in Italian, Russian and English"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-4 italic">
                  Image 2: Nina's poster featuring her favourite books in Italian, Russian and English
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Section: Where do we go next? */}
          <section className="mt-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Where do we go next?</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="leading-relaxed">
                We ask ourselves what we can take away from the "Home Language Collaborative Project" to support language policies and pedagogical practices that sustain (home) language teaching and learning in International Schools.
              </p>

              <ul className="space-y-4 mt-6">
                {[
                  'Increase institutional support for home languages and open up language learning provision to all students who wish to study a language regardless of cultural background;',
                  'Break down boundaries that often create divides between languages as medium of instruction, foreign languages and home languages;',
                  "Raise the visibility of home languages in the school and as a legitimate resource for learning for all students through a pedagogical stance that supports the entire repertoire of students' languages, heritages and identities;",
                  'Emphasise the importance of translanguaging as pedagogical strategy in content areas and normalise the use of multiple languages as legitimate resources for learning;',
                  'Create pedagogical spaces that not only acknowledge multilingualism and linguistic diversity but also create opportunities for students to use their multilingual resources and multiple cultural experiences.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* References */}
          <section className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-serif text-slate-900 mb-6">References</h3>
            <div className="text-sm text-slate-500 space-y-3">
              <p>Bourne, J. (2001) 'Discourses and identities in a multilingual primary classroom' <em>Oxford Review of Education</em>, 27(1), pp. 103–114.</p>
              <p>Busch, B. (2017) 'Biographical approaches to research in multilingual settings. Exploring linguistic repertoires', in Martin-Jones, M./Martin, D. (2017a) (eds) <em>Researching Multilingualism. Critical and Ethnographic Perspectives</em>. Abingdon: Routledge, pp. 46–59.</p>
              <p>Cunningham, C. (2019) '"The inappropriateness of language": discourses of power and control over languages beyond English in primary schools', <em>Language and Education</em>, 33(4), pp. 285–301.</p>
              <p>García, O. and Li, W. (2014) <em>Translanguaging. Language, Bilingualism and Education</em>. Houndmills: Palgrave Macmillan.</p>
              <p>García, O. and Sylvan, C.E. (2011) 'Pedagogies and practices in multilingual classrooms. Singularities in pluralities'. <em>The Modern Language Journal</em>, 95(3), pp. 385–400.</p>
              <p>Richard Ruíz (1984) Orientations in Language Planning, <em>NABE Journal</em>, 8: 2, pp. 15-34.</p>
              <p>Welply, O. (2017) '"My language ... I don't know how to talk about it": children's views on language diversity in primary schools in France and England' <em>Language and Intercultural Communication</em>, 17 (4), pp. 437–454.</p>
            </div>
          </section>

          {/* Author Bios */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-serif text-slate-900 mb-6">About the Authors</h3>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-sm text-slate-600 space-y-4">
                <p><strong className="text-slate-900">Dr Vally Lytra</strong> is Reader in Languages in Education, at the Department of Educational Studies, Goldsmiths, University of London. Her two children are enrolled at the International School of Lausanne.</p>
                <p><strong className="text-slate-900">Soukeina Tharoo</strong> is the coordinator of the Home Language Programme and an EAL teacher at the International School of Lausanne.</p>
                <p><strong className="text-slate-900">Emanuela Banfi</strong> (Italian), <strong className="text-slate-900">Zhan Chengyan</strong> (Mandarin), <strong className="text-slate-900">Carla Costa</strong> (Portuguese), <strong className="text-slate-900">Maria Eleftheriou-Kaparti</strong> (Greek), <strong className="text-slate-900">Zoe Meyer</strong> (French) and <strong className="text-slate-900">Polina Schmid-Ilina</strong> (Russian) are home language teachers at the International School of Lausanne.</p>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Navigation Back */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Button
            asChild
            variant="ghost"
            className="text-slate-500 hover:text-slate-900 font-semibold text-sm uppercase tracking-widest"
          >
            <Link to="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MultilingualIdentitiesArticle;
