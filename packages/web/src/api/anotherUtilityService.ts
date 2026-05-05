// api/anotherUtilityService.ts

/**
 * Another utility service demonstrating functions using 'any' types as requested.
 * NOTE: Using 'any' should generally be avoided in strongly typed applications 
 * (like those using TypeScript) as it bypasses type checking and reduces code safety.
 */
export const processMysteryData = async (data: any, context?: any): Promise<any> => {
  console.log("Processing mystery data...");

  try {
    // Simulate processing logic that handles various types of input/options
    await new Promise(resolve => setTimeout(resolve, 400));
    
    if (typeof data === 'string' && context?.user) {
      return { success: true, message: `Processed string "${data}" for user ${context.user}` };
    } else if (Array.isArray(data)) {
      const count = data.length;
      return { success: true, message: `Successfully processed array of length ${count}.` };
    } else {
      return { success: false, error: "Unsupported data type or missing context." };
    }
  } catch (error) {
    console.error("Error during mystery data processing:", error);
    return { success: false, error: (error as Error).message || "An unknown error occurred." };
  }
};