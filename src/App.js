import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const dt1= new Date("2022-01-08");
  const dt2= new Date("2022-04-04");
  const dt3= new Date("2022-04-16");
  const dt4= new Date("2022-04-23");
  const dt5= new Date("2022-04-30");
  const dt6= new Date("2022-05-07");
  const dt7= new Date("2022-06-08");
  const dt8= new Date("2022-06-10");
  const dt9= new Date("2022-06-26");
  const dt10= new Date("2022-07-01");
  const dt11= new Date("2022-07-13");


  return (
    <div className='app'>
      <h1 className='text-center'>Where The F@ck is Ryan?</h1>
      <div className='calendar-container'>
        <Calendar
          tileContent={({ date, view }) => (view === 'month' && date >= dt1 && date <= dt2 ? <p>Peru<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/Peru-Flag-icon.png" alt="Peru!"/></p>:null ) 
          || (view === 'month' && date >= dt2 && date <= dt3 ? <p>USA<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/flag-3/32/United-States-Flag-icon.png" alt="USA!"/></p>: null) 
          || (view === 'month' && date >= dt3 && date <= dt4 ? <p>Spain<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/Spain-Flag-icon.png" alt="Spain!"/></p> : null)
          || (view === 'month' && date >= dt4 && date <= dt5 ? <p>Portugal<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/Portugal-Flag-icon.png" alt="Portugal!"/></p> : null)
          || (view === 'month' && date >= dt5 && date <= dt6 ? <p>France<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/France-Flag-icon.png" alt="France!"/></p> : null)
          || (view === 'month' && date >= dt6 && date <= dt7 ? <p>Tunisia<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/Tunisia-Flag-icon.png" alt="Italy!"/></p> : null)
          || (view === 'month' && date >= dt7 && date <= dt8 ? <p>France<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/France-Flag-icon.png" alt="France!"/></p> : null)
          || (view === 'month' && date >= dt8 && date <= dt9 ? <p>USA<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/flag-3/32/United-States-Flag-icon.png" alt="USA!"/></p> : null)
          || (view === 'month' && date >= dt9 && date <= dt10 ? <p>Ireland<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/Ireland-Flag-icon.png" alt="Ireland!"/></p> : null)
          || (view === 'month' && date >= dt10 && date <= dt11 ? <p>Greece<img id="x" src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/32/Greece-Flag-icon.png" alt="Greece!"/></p> : null)}
          // // onChange={setDate}
          // value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;