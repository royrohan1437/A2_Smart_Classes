import React from 'react';
import { Users } from 'lucide-react';
import { TEACHERS } from '../constants';

export function Teachers() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Expert Faculty</h1>
          <p className="text-lg text-gray-100">
            Dedicated educators committed to student success
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users size={32} className="text-primary-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-600">
                Master's Degree Holders
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of highly qualified educators with Master's degrees and extensive
              school-level teaching experience, ensuring excellence in every classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEACHERS.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out border border-gray-200"
              >
                  <div className="relative h-75 overflow-hidden">
                    
                    <img
                    src={teacher.photo}
                    alt={teacher.name}
                    loading = "lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">{teacher.name}</h3>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Qualifications</p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.degrees.map((degree, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {degree}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="bg-accent-100 text-accent-700 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Classes</p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.classes.map((classInfo, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {classInfo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">
            Teaching Excellence Defined
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-primary-600 mb-2">Highly Qualified</h3>
              <p className="text-gray-600 text-sm">
                All teachers hold Master's degrees in their respective subjects
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-primary-600 mb-2">Experienced</h3>
              <p className="text-gray-600 text-sm">
                Extensive school-level teaching experience ensuring proven methodologies
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-primary-600 mb-2">Dedicated</h3>
              <p className="text-gray-600 text-sm">
                Committed to student success with personalized attention and support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
