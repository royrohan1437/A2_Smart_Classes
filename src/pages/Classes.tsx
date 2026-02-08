import React, { useState } from 'react';
import { BookOpen, Zap } from 'lucide-react';
import { Button } from '../components/shared/Button';

interface ClassesProps {
  onEnrollClick: () => void;
}

export function Classes({ onEnrollClick }: ClassesProps) {
  const [activeTab, setActiveTab] = useState< 'cbse' | 'icse' | 'jee' >('cbse');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Best Coaching Centre in Barasat
          </h1>
          <p className="text-lg text-gray-100">
            Comprehensive academic and competitive exam preparation
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab('cbse')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'cbse'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              CBSE
            </button>
            <button
              onClick={() => setActiveTab('icse')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'icse'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ICSE / ISC
            </button>
            <button
              onClick={() => setActiveTab('jee')}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'jee'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              JEE / NEET
            </button>
            
          </div>

                    {activeTab === 'cbse' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-2 border-primary-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={32} className="text-primary-600" />
                  <h3 className="text-2xl font-bold text-primary-600">CBSE  Programs</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Expert faculty, focused guidance, and exam-oriented study methods to help students
                  achieve top results with confidence. Our comprehensive curriculum ensures deep
                  understanding and consistent performance.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">Classes V – X (All Subjects)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Mathematics, Science, Social Studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>English Language & Literature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Second Language Options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Concept-based learning approach</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">XI – XII (Arts, Commerce, Science)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Science: Physics, Chemistry, Biology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Commerce: Accounting, Economics, Business</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Arts: History, Geography, Civics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Board exam focused curriculum</span>
                      </li>
                    </ul>
                  </div>

                  {/* <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">Graduation (Pass & Honors)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Subject-specific expert guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Personalized learning paths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>University entrance preparation</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-accent-50 rounded-xl p-8 border-2 border-accent-200">
                  <h4 className="text-xl font-bold text-accent-600 mb-4">Why Choose Our CBSE Program?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Experienced CBSE curriculum specialists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Focus on conceptual understanding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Regular mock exams and evaluations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Small batch sizes for personalized attention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Doubt resolution sessions</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full"
                    onClick={onEnrollClick}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'icse' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-2 border-primary-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={32} className="text-primary-600" />
                  <h3 className="text-2xl font-bold text-primary-600">ICSE / ISC Programs</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Expert faculty, focused guidance, and exam-oriented study methods to help students
                  achieve top results with confidence. Our comprehensive curriculum ensures deep
                  understanding and consistent performance.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">Classes V – X (All Subjects)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Mathematics, Science, Social Studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>English Language & Literature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Second Language Options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Concept-based learning approach</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">XI – XII (Arts, Commerce, Science)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Science: Physics, Chemistry, Biology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Commerce: Accounting, Economics, Business</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Arts: History, Geography, Civics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Board exam focused curriculum</span>
                      </li>
                    </ul>
                  </div>

                  {/* <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">Graduation (Pass & Honors)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Subject-specific expert guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Personalized learning paths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>University entrance preparation</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-accent-50 rounded-xl p-8 border-2 border-accent-200">
                  <h4 className="text-xl font-bold text-accent-600 mb-4">Why Choose Our ICSE Program?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Experienced ICSE curriculum specialists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Focus on conceptual understanding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Regular mock exams and evaluations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Small batch sizes for personalized attention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Doubt resolution sessions</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full"
                    onClick={onEnrollClick}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jee' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-2 border-primary-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={32} className="text-primary-600" />
                  <h3 className="text-2xl font-bold text-primary-600">JEE / NEET Preparation</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Concept clarity, structured test series, and personalized mentoring to boost accuracy
                  and rank performance. Our proven methodology has helped hundreds of students crack
                  competitive exams.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">JEE (Main & Advanced)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Physics: Mechanics, Thermodynamics, Optics, Modern Physics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Chemistry: Organic, Inorganic, Physical Chemistry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Weekly test series and performance analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-bold text-primary-600 mb-3">NEET Preparation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Physics: Mechanics, Waves, Optics, Modern Physics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Chemistry: Organic, Inorganic, Biochemistry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Biology: Botany, Zoology, Human Physiology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>Mock exams with answer analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-accent-50 rounded-xl p-8 border-2 border-accent-200">
                  <h4 className="text-xl font-bold text-accent-600 mb-4">Our JEE/NEET Advantage</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Specialized competitive exam faculty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Topic-wise and full-length test series</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Personalized doubt resolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Strategy sessions and mentoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-700">Proven track record of selections</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full"
                    onClick={onEnrollClick}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join A2 Smart Classes Today</h2>
          <p className="text-lg text-gray-100 mb-8">
            Excellence in education awaits you. Start your journey now.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={onEnrollClick}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
