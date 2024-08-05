import { z, defineCollection } from "astro:content"

const footerColumnoneCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        description: z.string(),
    
	})
  
})
const footerformCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        description: z.string(),
    
	})
  
})

export const collections = {

    "footer-column-one": footerColumnoneCollection,
	"footer-form": footerformCollection,

}
