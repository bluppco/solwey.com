import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live : z.boolean(),

    })

})

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

    "header" : headerCollection,
    "footer-column-one": footerColumnoneCollection,
	"footer-form": footerformCollection,

}
