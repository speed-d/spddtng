import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const token = process.env.EVENTBRITE_API_KEY;
  const organizationId = process.env.EVENTBRITE_ORGANIZATION_ID;

  const response = await fetch(`https://www.eventbriteapi.com/v3/organizations/${organizationId}/venues/?token=${token}`, { cache: 'no-store'});


  if (!response.ok) {
    const error = await response.json();
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Error fetching venues' },
      { status: response.status }
    );
  }
  const data = await response.json();
  console.log('data: ', data)
  const {venues} = data;
  
  const nextResponse = NextResponse.json(data);
  nextResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  nextResponse.headers.set('Pragma', 'no-cache');
  nextResponse.headers.set('Expires', '0');
  nextResponse.headers.set('Surrogate-Control', 'no-store');

  return nextResponse;

}
