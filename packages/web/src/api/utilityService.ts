// api/utilityService.ts

/**
 * A utility service demonstrating functions using 'any' types as requested.
 * NOTE: Using 'any' should generally be avoided in strongly typed applications
 * (like those using TypeScript) as it bypasses type checking and reduces code safety.
 */
export const processGenericData = async (input: any, options?: any): Promise<any> => {
  console.log('Processing generic data...');

  try {
    // Simulate processing logic that handles various types of input/options
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (typeof input === 'object' && input !== null) {
      return {
        success: true,
        processedData: `Processed object with keys: ${Object.keys(input).join(', ')}`,
      };
    } else if (typeof input === 'string') {
      return { success: true, processedData: `Successfully processed string: "${input}"` };
    } else {
      return { success: false, error: 'Unsupported input type.' };
    }
  } catch (error) {
    console.error('Error during generic data processing:', error);
    return { success: false, error: (error as Error).message || 'An unknown error occurred.' };
  }
};
