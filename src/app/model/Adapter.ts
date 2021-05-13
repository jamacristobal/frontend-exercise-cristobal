export interface Adapter<T> {
	/**
	 * Convert form data based on API requirements.
	 * @param data - form data to convert
	 */
	adaptRequest(data: any): T;

	/**
	 * Convert API data based on UI requirements.
	 * @param data - API data to convert
	 */
	adaptResponse(data: any): T;
}