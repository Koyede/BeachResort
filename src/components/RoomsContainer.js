import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading';

function RoomsContainer ({context}) {
const {loading, sortedRooms,rooms } = context;
if(loading) {
   return <Loading />;
 }
                    
  return (
     <>
         <RoomFilter rooms={rooms}/>
         <RoomList rooms={sortedRooms} />
     </>
  );
}



export default withRoomConsumer(RoomsContainer);



// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { RoomCusumer } from '../Context'
// import Loading from './Loading';



// export default function RoomsContainer() {
//     return (
//         <RoomCusumer>
//             {
//             (value) => {
//             const {loading, sortedRooms,rooms} = value
//             if(loading) {
//                 return <Loading />;
//             }
                
//         return (
//             <div>
//                Hello from rooms container
//                <RoomFilter rooms={rooms}/>
//                <RoomList rooms={sortedRooms} />
//            </div>
//         );
//             }    
//             }
//         </RoomCusumer>
//     );   
   
// }
