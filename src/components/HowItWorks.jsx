import { motion } from 'framer-motion'
import { CloudArrowUpIcon, CurrencyDollarIcon, BanknotesIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    title: 'Upload License',
    description: 'Simply upload your software license details through our secure platform.',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Get Valuation',
    description: 'Receive an instant valuation based on current market rates and demand.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Get Paid',
    description: 'Once sold, receive payment directly to your account within 24 hours.',
    icon: BanknotesIcon,
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Selling your software licenses has never been easier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 