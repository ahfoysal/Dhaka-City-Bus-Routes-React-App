import React, { useEffect, useState } from 'react'
import db from '../Firebase'
import { collection, getDocs,addDoc,query, where, updateDoc } from 'firebase/firestore';

const Add = () => {
    const collectionRef = collection(db, 'buses ');
    // const myCollectionRef = db.collection('buses ');
    const [busName, setBusName] = useState('')
    const [routesOf, setRoutesOf] = useState('')





function createBusObject(route, busName) {
  return {
    Routes: route,
    BusNmae: busName,
    StartingAndEndTime: null
  };
}
function separateBusBlocks(busInfoText) {
    const busInfoList = [];
    const busInfoArray = busInfoText.split("See Full Route Map");
    for (let i = 0; i < busInfoArray.length; i++) {
      if (busInfoArray[i].trim() !== "") {
        const busNameEndIndex = busInfoArray[i].indexOf("Bus Route") + 9;
        const busRouteStartIndex = busInfoArray[i].indexOf("(", busNameEndIndex) + 1;
        const busRouteEndIndex = busInfoArray[i].indexOf(")");
        const busScheduleStartIndex = busInfoArray[i].indexOf("Schedule:") + 9;
  
        const busName = busInfoArray[i].substring(0, busNameEndIndex).trim();
        const busRoute = busInfoArray[i].substring(busRouteStartIndex, busRouteEndIndex).trim();
        const busSchedule = busInfoArray[i].substring(busScheduleStartIndex).trim();
  
        busInfoList.push({ busName, busRoute, busSchedule });
      }
    }
    return busInfoList;
  }

  const busInfoText = 'Bahon Bus Route (বাহন বাস)Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Bangla College ⇄ Technical ⇄ Darussalam ⇄ Kallyanpur ⇄ Shyamoli ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 Kalabagan ⇄ Science Lab ⇄ Katabon ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Dainik Bangla Moor ⇄ Motijheel ⇄ Arambagh ⇄ Kamlapur – Mugdapara ⇄ Bashabo ⇄ KhilgaonSee Full Route Map6 am-11pmSemi-Sitting Service (Check System)Baishakhi Bus Route (বৈশাখী বাস)Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Bashtola ⇄ Uttar Badda ⇄ Notun BazarSee Full Route MapBalaka Bus Route (বলাকা বাস)Sayedabad ⇄ Manik Nagar ⇄ TT Para – Kamalapur ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Satrasta ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur ChourastaSee Full Route MapSemi-Sitting ServiceBasumati Bus Route (বাসুমতি বাস)Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Manik Mia Avenue ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Babubazar ⇄ Keraniganj ⇄ MaowaSee Full Route MapBasumati Transport Bus Route (বাসুমতি ট্রান্সপোর্ট)Gabtoli – Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur ChourastaSee Full Route MapBest Satabdi AC Bus Route (বেষ্ট শতাব্দী এসি বাস)Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Khamar Bari ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ DiabariSee Full Route MapBest Transport Bus Route (বেষ্ট ট্রান্সপোর্ট বাস)Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel ⇄ Ittefaq Moor ⇄ Sayedabad ⇄ JatrabariSee Full Route MapBhuiyan Paribahan Bus Route (ভূঁইয়া পরিবহন)Japan Garden City ⇄ Ring Road ⇄ Adabor ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Zia Uddyan ⇄ Bijoy Sarani ⇄ Old Airport ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Kakali ⇄ Banani ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ AbdullahpurSee Full Route MapBihanga Bus Route (বিহাঙ্গা বাস)Mirpur 12 ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan Bridge ⇄ Gulshan 1 ⇄ Badda ⇄ Notun BazarSee Full Route MapBikalpa Bus Auto Service (বিকল্প বাস অটো সার্ভিস)Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 1 ⇄ Kazipara ⇄ Shewrapara – Taltola – Agargaon – Bijoy Sarani – Farmgate – Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ MotijheelSee Full Route MapSemi-Sitting ServiceBikalpa Bus City Super Service (বিকল্প বাস সিটি সুপার সার্ভিস)Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara – Taltola ⇄ Agargaon ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ City College ⇄ New Market ⇄ Nilkhet ⇄ Azimpur – DhakeshwariSee Full Route MapSemi-Sitting ServiceBikash Bus Route (বিকাশ বাস)Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Khamar Bari ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Abdullahpur ⇄ KamarparaSee Full Route MapSemi-Sitting ServiceBikash Paribahan Bus Route (বিকাশ পরিবহন বাস)Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Khamar Bari ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara – DhourSee Full Route MapSemi-Sitting ServiceBondhu Paribahan Bus Route (বন্ধু পরিবহন বাস)Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun BazarSee Full Route MapBorak Bus Route (বোরাক বাস)Palashi ⇄ Meghna GhatSee Full Route MapSemi-Sitting ServiceBashumoti Bus Route (বসুমতি বাস)Gazipur Chourasta ⇄ Tongi ⇄ Airport ⇄ Khilkhet ⇄ Kalshi Pallabi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Mirpur 1 ⇄ GabtoliSee Full Route MapBrihottor Mirpur Bus Route (বৃহত্তর মিরপুর বাস)Chiriyakhana ⇄ Mirpur 1 ⇄ Gabtoli ⇄ Amin Bazar ⇄ Savar ⇄ Nobinagar ChandraSee Full Route MapBRTC Bus Route (বি আর টিসি বাস)Madanpur ⇄ Kanchpur ⇄ Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ SavarSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Kakali ⇄ Banani ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ TongiSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari – Asad Gate – College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Baipayl ⇄ Zirani Bazar ⇄ ChandraSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Mohammadpur ⇄ Asad Gate ⇄ Khamar Bari -⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa RoadSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Kamalapur ⇄ Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa RoadSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Vulta ⇄ Kanchan Bridge ⇄ Nila Market ⇄ 300 Feet ⇄ Bashundhara (300 Feet Gate) ⇄ Kuril Bishwa RoadSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ AbdullahpurSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ MotijheelSee Full Route MapSemi-Sitting ServiceBRTC Bus Route (বি আর টিসি বাস)Gabtoli ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur ChourastaSee Full Route MapSemi-Sitting ServiceBRTC Articulated Bus Route (বি আর টিসি আরটিকুলেটেড বাস)Balughat ⇄ Cantonment ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Bangla Motor ⇄ Shahbag ⇄ Paltan ⇄ Gulistan ⇄ MotijheelSee Full Route MapSemi-Sitting Service","Cantonment Bus Route (ক্যান্টনমেন্ট বাস সার্ভিস)Cantonment Mini Service Bus Route (ক্যান্টনমেন্ট  মিনি বাস সার্ভিস)Champion Bus Route (চ্যাম্পিয়ন বাস)City Link Bus Route (সিটি লিংক বাস)":"Cantonment Bus Route (ক্যান্টনমেন্ট বাস সার্ভিস)Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ SavarSee Full Route MapCantonment Mini Service Bus Route (ক্যান্টনমেন্ট  মিনি বাস সার্ভিস)Mirpur 14 ⇄ Kachukhet ⇄ Sainik Club ⇄ Kakali ⇄ Banani ⇄ MohakhaliSee Full Route MapChampion Bus Route (চ্যাম্পিয়ন বাস)Vashantek ⇄ Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cenema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ GabtoliSee Full Route MapCity Link Bus Route (সিটি লিংক বাস)Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bata Signal ⇄ Science Lab ⇄ City College ⇄ Jigatola ⇄ Dhanmondi 15 ⇄ Star Kabab ⇄ Shankar ⇄ Mohammadpur ⇄ Bosila ⇄ Ghatar CharSee Full Route MapSemi-Sitting Service'
useEffect(() => {
    const separatedBusInfo = separateBusBlocks(busInfoText);
    console.log(separatedBusInfo);
}, [])

    
const handleInputChange = async () => {
    
//   console.log(buseName, routesOf)
  const locations = routesOf.split(" ⇄ ");
      const data = createBusObject(locations, busName);
      const querySnapshot = await getDocs(query(collectionRef, where("BusNmae", "==", busName)));
console.log(data)
// Check if a matching document was found
if (querySnapshot.empty) {
  console.log("No document found with name", busName);
} else {
  // Get the first matching document
  const doc = querySnapshot.docs[0];
  const docRef = querySnapshot.docs[0].ref;
  console.log("Document found with ID:", doc.id, "and data:", doc.data());
  await updateDoc(docRef, data);

}
  }
  const handleInputChange2 = async () => {
//   console.log(buseName, routesOf)
  const locations = routesOf.split(" ⇄ ");
      const data = createBusObject(locations, busName);
      const querySnapshot = await getDocs(query(collectionRef, where("BusNmae", "==", busName)));
console.log(data)
// Check if a matching document was found
if (querySnapshot.empty) {
  console.log("No document found with name", busName);
} else {
  // Get the first matching document
  const doc = querySnapshot.docs[0];
  const docRef = querySnapshot.docs[0].ref;
  console.log("Document found with ID:", doc.id, "and data:", doc.data());
//   await updateDoc(docRef, data);

}
  }


  return (
    <div>
    <input className='input' name="input1" value={busName} onChange={(e) => setBusName(e.target.value)}  placeholder='bus name' type="text" />
    <input className='input' name="input2" value={routesOf}  onChange={(e) => setRoutesOf(e.target.value)}placeholder='routes' type="text" />
    <button className='btn' onClick={handleInputChange}>add</button>
    <button className='btn' onClick={handleInputChange2}>Get Bus</button>
      
    </div>
  )
}

export default Add
