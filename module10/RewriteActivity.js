// Rewritten using async-await syntax
async function getProcessedData(url) {
    let data;
    try {
        // Try downloading the main data
        data = await downloadData(url);
    } catch (error) {
        // If downloadData fails, try fallback
        data = await downloadFallbackData(url);
    }
    //  // Process the downloaded data or Process the fallback data
    return await processDataInWorker(data);
}
