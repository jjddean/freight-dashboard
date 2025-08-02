// Admin Dashboard - Test Vercel App APIs
// This service calls the main freight app deployed on Vercel

const VERCEL_APP_URL = 'https://clerk-react-lac.vercel.app';

export interface TestResult {
  endpoint: string;
  status: 'success' | 'error';
  responseTime: number;
  data?: any;
  error?: string;
}

export class VercelApiTester {
  private baseUrl: string;

  constructor() {
    this.baseUrl = VERCEL_APP_URL;
  }

  // Test quote request API
  async testQuoteAPI(): Promise<TestResult> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(`${this.baseUrl}/api/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: 'London, UK',
          destination: 'Hamburg, DE',
          serviceType: 'ocean',
          cargoType: 'general',
          weight: '1000',
          dimensions: { length: '100', width: '100', height: '100' },
          value: '10000',
          incoterms: 'FOB',
          urgency: 'standard',
          additionalServices: ['insurance'],
          contactInfo: {
            name: 'Admin Test',
            email: 'admin@test.com',
            phone: '+44123456789',
            company: 'Test Company'
          }
        })
      });

      const responseTime = Date.now() - startTime;
      const data = await response.json();

      return {
        endpoint: '/api/quotes',
        status: response.ok ? 'success' : 'error',
        responseTime,
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : `HTTP ${response.status}`
      };
    } catch (error) {
      return {
        endpoint: '/api/quotes',
        status: 'error',
        responseTime: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Test carrier rates API
  async testCarrierRatesAPI(): Promise<TestResult> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(`${this.baseUrl}/api/rates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: {
            street1: '123 Test St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'US'
          },
          destination: {
            street1: '456 Test Ave',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001',
            country: 'US'
          },
          parcel: {
            length: 10,
            width: 8,
            height: 6,
            distance_unit: 'in',
            weight: 5,
            mass_unit: 'lb'
          }
        })
      });

      const responseTime = Date.now() - startTime;
      const data = await response.json();

      return {
        endpoint: '/api/rates',
        status: response.ok ? 'success' : 'error',
        responseTime,
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : `HTTP ${response.status}`
      };
    } catch (error) {
      return {
        endpoint: '/api/rates',
        status: 'error',
        responseTime: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Test shipment tracking API
  async testTrackingAPI(): Promise<TestResult> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(`${this.baseUrl}/api/shipments/SH-2024-001/tracking`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const responseTime = Date.now() - startTime;
      const data = await response.json();

      return {
        endpoint: '/api/shipments/tracking',
        status: response.ok ? 'success' : 'error',
        responseTime,
        data: response.ok ? data : undefined,
        error: response.ok ? undefined : `HTTP ${response.status}`
      };
    } catch (error) {
      return {
        endpoint: '/api/shipments/tracking',
        status: 'error',
        responseTime: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Test all APIs
  async testAllAPIs(): Promise<TestResult[]> {
    console.log('🚀 Testing Vercel App APIs from Admin Dashboard...');
    
    const results = await Promise.all([
      this.testQuoteAPI(),
      this.testCarrierRatesAPI(),
      this.testTrackingAPI()
    ]);

    console.log('✅ API Tests Complete:', results);
    return results;
  }

  // Test basic connectivity
  async testConnectivity(): Promise<TestResult> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(`${this.baseUrl}/`, {
        method: 'GET'
      });

      const responseTime = Date.now() - startTime;

      return {
        endpoint: '/',
        status: response.ok ? 'success' : 'error',
        responseTime,
        data: response.ok ? { status: 'Connected to Vercel app' } : undefined,
        error: response.ok ? undefined : `HTTP ${response.status}`
      };
    } catch (error) {
      return {
        endpoint: '/',
        status: 'error',
        responseTime: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Connection failed'
      };
    }
  }
}

export const vercelApiTester = new VercelApiTester();
