// Rewritten using async-await syntax
async function getProcessedData(url) {
  try {
    // Try downloading the main data
    const data = await downloadData(url);
    // Process the downloaded data
    return await processDataInWorker(data);
  } catch (error) {
    // If downloadData fails, try fallback
    const fallbackData = await downloadFallbackData(url);
    // Process the fallback data
    return await processDataInWorker(fallbackData);
  }
}
