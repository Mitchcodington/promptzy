import Link from "next/link"

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start
    flex-col mt-20">
      <h1 className="head_text text-left">
        <span className="text-black">{type} Prompt
        </span>
      </h1>
      <p className="blue_gradient desc text-left max-w-md">
        Fuel Your Creative Expression
Craft and Share Extraordinary Prompts,
Unleash the Power of AI to Ignite Your Imagination..
      </p>

      <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex
      flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold
          text-base text-gray-700">
            Create AI Prompt 
          </span>

          <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post,
          prompt: e.target.value})}
          placeholder="Write your prompt here..."
          required
          className="form_textarea shadow-2xl"/>
        </label>

        <label>
          <span className="font-satoshi font-semibold
          text-base text-gray-700">
            Tag { '  '}
            <span className="font-normal">
              (#style,#webdevelopment,#recipe)
            </span>
          </span>

          <input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag:
           e.target.value})}
          placeholder="#tag"
          required
          className="form_input shadow-2xl"/>
        </label>
        
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className='text-blu_gradient font-bold
          text-sm'>
            Cancel
          </Link>

          <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm
          bg-primary-orange font-semibold rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form