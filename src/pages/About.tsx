import React from 'react';
import { Building2, Users, Lightbulb, Target } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About A2 Smart Classes</h1>
          <p className="text-lg text-gray-100">
            Empowering Students Through Technology and Excellence
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">
            Infrastructure & Learning Environment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-bold text-primary-600 mb-3 text-lg">
                  Technology-Enabled Smart Classrooms
                </h3>
                <p className="text-gray-700">
                  Our state-of-the-art classrooms are equipped with modern technology to enhance
                  interactive learning. Interactive boards, digital tools, and multimedia resources
                  create an engaging educational experience for every student.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-bold text-primary-600 mb-3 text-lg">
                  Visual & Concept-Based Learning
                </h3>
                <p className="text-gray-700">
                  We focus on concept clarity through visual teaching methods. Students learn
                  fundamentals deeply rather than memorizing, fostering critical thinking and
                  long-term retention.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200">
                <h3 className="font-bold text-primary-600 mb-3 text-lg">
                  Class Recordings for Revision
                </h3>
                <p className="text-gray-700">
                  All classes are recorded and made available to students for unlimited revision.
                  Students can rewatch lectures, revisit difficult topics, and learn at their own pace.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-300">
                <h3 className="font-bold text-accent-600 mb-3 text-lg">
                  Printed Board Work
                </h3>
                <p className="text-gray-700">
                  We provide printed materials of all board work and notes. This ensures better
                  retention, allows students to focus on the lecture rather than writing, and
                  provides a reference material for future studies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-300">
                <h3 className="font-bold text-accent-600 mb-3 text-lg">
                  Highly Secure Classrooms
                </h3>
                <p className="text-gray-700">
                  Student safety and security are our top priorities. Our classrooms maintain a
                  safe, inclusive, and secure environment where every student feels comfortable
                  to learn and grow.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-300">
                <h3 className="font-bold text-accent-600 mb-3 text-lg">
                  Regular Assessments
                </h3>
                <p className="text-gray-700">
                  Monthly mock tests and regular assessments help track progress and identify
                  areas for improvement. Performance tracking ensures no student is left behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">Faculty Excellence</h2>
          <div className="bg-white rounded-xl p-8 border-2 border-primary-200 shadow-lg">
            <div className="flex gap-4 mb-4">
              <Users size={32} className="text-accent-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">
                  Highly Qualified Teachers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All our teachers hold Master's degrees in their respective subjects and have
                  extensive school-level teaching experience. Our faculty is committed to ensuring
                  strong fundamentals, exam readiness, and overall personality development of every
                  student. With years of experience and proven track records, our teachers provide
                  personalized attention, clear doubt resolution, and motivational support to help
                  students achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">Additional Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent-500 rounded-full p-3">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold">Yoga Training</h3>
              </div>
              <p className="text-gray-100">
                Holistic wellness is integral to learning. Our yoga training program helps students
                maintain physical and mental health, improve concentration, and manage stress
                effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-600 rounded-full p-3">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-2xl font-bold">Self Defence Training</h3>
              </div>
              <p className="text-gray-100">
                We provide self-defence training to empower students with confidence and personal
                safety awareness. A safe and empowered student is a focused learner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-4">Our Mission</h2>
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-accent-500">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To deliver exceptional education that equips students with knowledge, skills, and
                  confidence while fostering a supportive and inspiring learning environment where
                  every student can thrive and grow.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-4">Our Vision</h2>
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-primary-600">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To create a future where quality education empowers students to overcome challenges,
                  nurture curiosity, and develop into confident, responsible leaders who make
                  positive contributions to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
