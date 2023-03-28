function searchBus() {
    input1 = document.getElementById('search_from'), input2 = document.getElementById('search_to'), filter1 = input1.value.toUpperCase(), filter2 = input2.value.toUpperCase(), ul = document.getElementById('myUL'), li = ul.getElementsByTagName('li');
    for (i = 0x0; i < li.length; i++) {
        x = li[i].getElementsByTagName('div')[0x0], txtValue = x.textContent || x.innerText, txtValue.toUpperCase().indexOf(filter1) > -0x1 && txtValue.toUpperCase().indexOf(filter2) > -0x1 ? li[i].style.display = '' : li[i].style.display = 'none';
    }
}
const html = `<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus1" role=" button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Achim Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus1">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Ansar Camp - Mirpur 1 - Sony Cenema
        Hall - Mirpur 2 - Mirpur 10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril
        Bishwa Road - Jamuna Future Park - Bashundhara - Nadda - Notun Bazar - Bashtola - Shahjadpur -
        Uttar Badda - Badda - Madhya Badda - Merul - Rampura Bridge - Banasree - Demra Staff Quarter
    </div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus2" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Agradut</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus2">
    <div class="card card-body"><b>Route: </b>Savar - Hemayetpur - Amin Bazar - Gabtoli - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - Agargaon - Zia Uddyan - Bijoy Sarani - Jahangir Gate -
        Mohakhali - Wireless - Gulshan 1 - Badda Link Road - Bashtola - Shahjadpur - Uttar Badda - Notun
        Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus3" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Airport Bangabandhu Avenue Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus3">
    <div class="card card-body"><b>Route: </b>Fulbaria - Golap Shah Mazar - GPO - Paltan - Press Club -
        High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Bijoy Sarani -
        Jahangir Gate - Mohakhali - Chairman Bari - Sainik Club - Banani - Kakali - Staff Road - MES -
        Shewra - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur -
        House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus4" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Ajmeri Glory</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus4">
    <div class="card card-body"><b>Route: </b>Sadarghat - Ray Saheb Bazar - Naya Bazar - Golap Shah
        Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Nabisco - Mohakhali -
        Sainik Club - Banani - Kakali - Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet -
        Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi -
        Station Road - Mill Gate - Board Bazar - Gazipur Bypass - Konabari - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus5" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Akash</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus5">
    <div class="card card-body"><b>Route: </b>Kadamtali - Keraniganj - Babubazar - Naya Bazar - Golap
        Shah Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate
        - Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Shahjadpur - Bashtola - Notun
        Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road - Khilkhet - Airport -
        Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus6" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Akik</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus6">
    <div class="card card-body"><b>Route: </b>Ansar Camp - Mirpur 1 - Sony Cenema Hall - Mirpur 2 -
        Mirpur 10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Jamuna
        Future Park - Bashundhara - Nadda - Notun Bazar - Bashtola - Shahjadpur - Uttar Badda</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus7" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Al Madina Plus One</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus7">
    <div class="card card-body"><b>Route: </b>Nandan Park - Zirani Bazar - Baipayl - Nobinagar - Savar -
        Hemayetpur - Amin Bazar - Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela - College
        Gate - Asad Gate - Khamar Bari - Farmgate - Kawran Bazar - Bangla Motor - Shahbag - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel - Kamalapur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus8" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Al Makka Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus8">
    <div class="card card-body"><b>Route: </b>Motijheel - Gulistan - GPO - Paltan - Kakrail -
        Shantinagar - Malibagh Moor - Mouchak - Mogbazar - Nabisco - Mohakhali - Chairman Bari - Kakali
        - Banani - ECB Square - Kalshi - Purobi - Mirpur 10 - Mirpur 2 - Mirpur 1</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus9" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Alif Enterprise</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus9">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema Hall -
        Mirpur 1 - Mazar Road - Konabari - Rupnagar - Beribadh - Birulia - Ashulia - Zirabo - Fantasy
        Kingdom - Nandan Park</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus10" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Alif Enterprise</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus10">
    <div class="card card-body"><b>Route: </b>Shia Mosque - Japan Garden City - Adabor - Shyamoli -
        Shishu Mela - Agargaon - Zia Uddyan - Bijoy Sarani - Jahangir Gate - Mohakhali - Wireless -
        Gulshan 1 - Badda Link Road - Madhya Badda - Merul - Rampura Bridge - Banasree</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus11" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Alif Enterprise</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus11">
    <div class="card card-body"><b>Route: </b>Mirpur 1 - Mirpur 2 - Mirpur 10 - Kazipara - Shewrapara -
        Agargaon - Bijoy Sarani - Jahangir Gate - Mohakhali - Wireless - Gulshan 1 - Badda Link Road -
        Madhya Badda - Merul - Rampura Bridge - Banasree</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus12" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Alif Enterprise</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus12">
    <div class="card card-body"><b>Route: </b>Japan Garden City - Ring Road - Adabor - Shyamoli - Shishu
        Mela - Agargaon - Zia Uddyan - Bijoy Sarani - Old Airport - Jahangir Gate - Mohakhali - Chairman
        Bari - Sainik Club - kakali - Banani - Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet
        - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus13" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Anabil Super</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus13">
    <div class="card card-body"><b>Route: </b>Sign Board - Shonir Akhra - Jatrabari - Sayedabad -
        Mugdapara - Bashabo - Khilgaon - Malibagh Railgate - Hazipara - Rampura Bazar - Rampura Bridge -
        Merul - Badda - Uttar Badda - Shahjadpur - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna
        Future Park - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi -
        Azampur - House Building - Abdullahpur - Tongi - station Road - Mill Gate - Board Bazar -
        Gazipur Bypass - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus14" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Arnob</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus14">
    <div class="card card-body"><b>Route: </b>Hemayetpur - Amin Bazar - Gabtoli - Technical - Kallyanpur
        - Shyamoli - Shishu Mela - Agargaon - Zia Uddyan - Bijoy Sarani - Jahangir Gate - Mohakhali -
        Wireless - Gulshan 1 - Badda Link Road - Madhya Badda - Merul - Rampura Bridge - Banasree -
        Demra Staff Quarter</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus15" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Ashirbad Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus15">
    <div class="card card-body"><b>Route: </b>Duaripara - Rupnagar Abashik - Shiyal Bari - Proshika Moor
        - Mirpur 2 - Mirpur 1 - Ansar Camp - Technical - Kallyanpur - Shyamoli - Shishu Mela - College
        Gate - Asad Gate - Dhanmondi 27 - Shukrabad - Dhanmondi 32 - Kalabagan - City College - New
        Market - Nilkhet - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus16" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Ashulia Classic</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus16">
    <div class="card card-body"><b>Route: </b>Nobinagar - Baipayl - Jamgora - Fantasy Kingdom - Zirabo -
        Ashulia Bazar - Kamarpara - Abdullahpur - House Building - Azampur - Rajlakshmi - Jashimuddin
        (Uttara) - Airport - Khilkhet - Kuril Bishwa Road - Shewra - MES - Kakali - Banani - Chairman
        Bari - Mohakhali - Nabisco - Satrasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus17" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Asmani</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus17">
    <div class="card card-body"><b>Route: </b>Dhour - Abdullahpur - House Building - Azampur -
        Rajlakshmi - Jashimuddin (Uttara) - Airport - Khilkhet - Kuril Bishwa Road - Jamuna Future Park
        - Bashundhara - Nadda - Notun Bazar - Bashtola - Shahjadpur - Uttar Badda - Badda - Madhya Badda
        - Merul - Rampura Bridge - Banasree - Demra Staff Quarter - Tarabo - Madanpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus18" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">ATCL</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus18">
    <div class="card card-body"><b>Route: </b>Mohammadpur Bus Stand - Asad Gate - Shukrabad - Kalabagan
        City College - Science Lab - Katabon - Bata Signal - Shahbag - Matsya Bhaban - High Court -
        Press Club - Paltan - GPO - Gulistan - Arambagh Notre Dame College</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus19" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Ayat</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus19">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Sony Cenema Hall - Mirpur 2 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Khamar Bari - Farmgate - Kawran Bazar - Bangla
        Motor - Mogbazar - Mouchak - Malibagh Moor - Rajarbag - Kamalapur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus20" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bahon</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus20">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Mirpur 1 - Ansar Camp -
        Bangla College - Technical - Darussalam - Kallyanpur - Shyamoli - Asad Gate - Dhanmondi 27 -
        Dhanmondi 32 Kalabagan - Science Lab - Katabon - Shahbag - High Court - Press Club - Paltan -
        Dainik Bangla Moor - Motijheel - Arambagh - Kamalapur - Mugdapara - Bashabo - Khilgaon</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus21" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Baishakhi</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus21">
    <div class="card card-body"><b>Route: </b>Savar - Hemayetpur - Amin Bazar - Gabtoli - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - Agargaon - Bijoy Sarani - Jahangir Gate - Mohakhali -
        Gulshan 1 - Badda Link Road - Bashtola - Uttar Badda - Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus22" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Balaka</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus22">
    <div class="card card-body"><b>Route: </b>Sayedabad - Manik Nagar - TT Para - Kamalapur - Malibagh
        Moor - Mouchak - Mogbazar - Satrasta - Nabisco - Mohakhali - Chairman Bari - Banani - Kakali -
        Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) -
        Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi - Station Road - Mill Gate - Board
        Bazar - Gazipur Bypass - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus23" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Basumati</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus23">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela
        - College Gate - Asad Gate - Manik Mia Avenue - Khamar Bari - Farmgate - Kawran Bazar - Bangla
        Motor Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Golap Shah Mazar - Naya
        Bazar - Babubazar - Keraniganj - Maowa</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus24" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Basumati Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus24">
    <div class="card card-body"><b>Route: </b>Gabtoli - Mirpur 1 - Sony Cenema Hall - Mirpur 2 - Mirpur
        10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Khilkhet -
        Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi -
        Station Road - Mill Gate - Board Bazar - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus25" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Best Shatabdi (AC)</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus25">
    <div class="card card-body"><b>Route: </b>Azimpur - Nilkhet - New Market - City College - Kalabagan
        - Dhanmondi 32 - Dhanmondi 27 - Khamar Bari - Farmgate - Jahangir Gate - Mohakhali - Chairman
        Bari - Sainik Club - Banani - Kakali - Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet
        - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Diabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus26" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Best Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus26">
    <div class="card card-body"><b>Route: </b>Mirpur 10 - Kazipara - Shewrapara - Taltola - Agargaon -
        Khamar Bari - Farmgate - Kawran Bazar - Bangla Motor - Shahbag - Matsya Bhaban - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel - Ittefaq Moor - Sayedabad - Jatrabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus27" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bhuyan Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus27">
    <div class="card card-body"><b>Route: </b>Japan Garden City - Ring Road - Adabor - Shyamoli - Shishu
        Mela - Agargaon - Zia Uddyan - Bijoy Sarani - Old Airport - Jahangir Gate - Mohakhali - Chairman
        Bari - Sainik Club - Kakali - Banani - Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet
        - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus28" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bihanga</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus28">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Mirpur 11 - Mirpur 10 - Kazipara - Shewrapara
        - Agargaon - Bijoy Sarani - Jahangir Gate - Mohakhali - Wireless - Gulshan Bridge - Gulshan 1 -
        Badda - Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus29" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bihanga Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus29">
    <div class="card card-body"><b>Route: </b>Duaripara - Rupnagar Abashik - Proshika Moor - Mirpur 2 -
        Mirpur 1 - Ansar Camp - Tolarbag - Bangla College - Technical - Darussalam - Kallyanpur Shyamoli
        - Shishu Mela - College Gate - Asad Gate - Dhanmondi 27 - Dhanmondi 32 - Shukrabad Kalabagan -
        City College - Science Lab - New Market - Nilkhet - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus30" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bihanga Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus30">
    <div class="card card-body"><b>Route: </b>Azimpur - Nilkhet - New Market - City College - Kalabagan
        - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate - Shyamoli - Kallyanpur - Darussalam -
        Technical - Bangla College - Tolarbag - Ansar Camp - Mirpur 1 - Mirpur 2 - Proshika Moor -
        Duaripara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus31" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bihango</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus31">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 1 -
        Kazipara - Shewrapara - Taltola - Agargaon - Bijoy Sarani - Jahangir Gate - Mohakhali - Wireless
        - Gulshan Bridge - Gulshan 1 - Badda</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus32" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bihango Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus32">
    <div class="card card-body"><b>Route: </b>Duaripara - Pallabi - Purobi - Mirpur 11 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Khamar Bari - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Golap Shah Mazar -
        Naya Bazar - Ray Saheb Bazar - Sadarghat</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus33" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bihango Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus33">
    <div class="card card-body"><b>Route: </b>Azimpur - Nilkhet - New Market - City College - Kalabagan
        - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur -
        Darussalam - Technical - Bangla College - Tolarbag - Ansar Camp - Mirpur 1 - Sony Cenema Hall -
        Mirpur 2 - Proshika Moor - Rupnagar - Duaripara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus34" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bikalpa auto service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus34">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 1 -
        Kazipara - Shewrapara - Taltola - Agargaon - Bijoy Sarani - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Gulistan - Motijheel
    </div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus35" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bikalpa City Super Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus35">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Shyamoli - Shishu Mela - College Gate - Asad Gate -
        Dhanmondi 27 - Dhanmondi 32 - Kalabagan - City College - New Market - Nilkhet - Azimpur -
        Dhakeshwari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus36" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bikash</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus36">
    <div class="card card-body"><b>Route: </b>Azimpur - Nilkhet - New Market - City College - Kalabagan
        - Dhanmondi 27 - Dhanmondi 32 - Khamar Bari - Farmgate - Jahangir Gate - Mohakhali - Sainik Club
        - Banani - Kakali - Kuril Bishwa Road - Khilkhet - Airport - Abdullahpur - Kamarpara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus37" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bikash Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus37">
    <div class="card card-body"><b>Route: </b>Sign Board - Matuail - Rayerbag - Shonir Akhra - Jatrabari
        - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar - Azimpur - Nilkhet - New Market - City
        College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Khamar Bari - Farmgate - Jahangir Gate -
        Mohakhali - Chairman Bari - Sainik Club - Banani - Kakali - Staff Road - MES - Shewra - Kuril
        Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building
        - Abdullahpur - Kamarpara - Dhour</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus38" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Bondhu Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus38">
    <div class="card card-body"><b>Route: </b>Gulistan - GPO - Paltan - Kakrail - Shantinagar - Malibagh
        Moor - Mouchak - Malibagh Railgate - Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda -
        Shahjadpur - Bashtola - Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus39" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Borak</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus39">
    <div class="card card-body"><b>Route: </b>Palashi - Meghna Ghat</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus40" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Boshumoti</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus40">
    <div class="card card-body"><b>Route: </b>Gazipur Chourasta - Tongi - Airport - Khilkhet - Kalshi
        Pallabi - Mirpur 11 - Mirpur 10 - Mirpur 1 - Gabtoli</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus41" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Brihottor Mirpur</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus41">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Gabtoli - Amin Bazar - Savar -
        Nobinagar Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus42" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus42">
    <div class="card card-body"><b>Route: </b>Madanpur - Kanchpur - Chittagong Road - Sign Board -
        Matuail - Rayerbag - Shonir Akhra - Jatrabari - Sayedabad - Gulistan - GPO - Paltan - Press Club
        - High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Khamar Bari -
        Asad Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur - Technical - Gabtoli - Amin
        Bazar - Hemayetpur - Savar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus43" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus43">
    <div class="card card-body"><b>Route: </b>Motijheel - Gulistan - GPO - Paltan - Press Club - High
        Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Jahangir Gate -
        Mohakhali - Chairman Bari - Kakali - Banani - Staff Road - MES - Shewra - Kuril Bishwa Road -
        Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur
        - Tongi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus44" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus44">
    <div class="card card-body"><b>Route: </b>Motijheel - Gulistan - GPO - Paltan - Press Club - High
        Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Khamar Bari - Asad
        Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur - Technical - Gabtoli - Amin Bazar -
        Hemayetpur - Baipayl - Zirani Bazar - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus45" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus45">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Asad Gate - Khamar Bari - Farmgate -
        Jahangir Gate - Mohakhali - Wireless - Gulshan 1 - Badda Link Road - Uttar Badda - Shahjadpur -
        Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus46" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus46">
    <div class="card card-body"><b>Route: </b>Kamalapur - Motijheel - Gulistan - GPO - Paltan - Press
        Club - High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Jahangir
        Gate - Mohakhali - Wireless - Gulshan 1 - Badda Link Road - Uttar Badda - Shahjadpur - Bashtola
        - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus47" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus47">
    <div class="card card-body"><b>Route: </b>Vulta - Kanchan Bridge - Nila Market - 300 Feet -
        Bashundhara (300 Feet Gate) - Kuril Bishwa Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus48" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus48">
    <div class="card card-body"><b>Route: </b>Motijheel - Gulistan - GPO - Paltan - Kakrail -
        Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate - Hazipara - Rampura Bazar - Rampura
        Bridge - Merul - Badda - Shahjadpur - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna
        Future Park - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi -
        Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus49" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus49">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Star Kabab - Dhanmondi 15 -
        Jigatola - City College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus50" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus50">
    <div class="card card-body"><b>Route: </b>Gabtoli - Mirpur 1 - Sony Cenema Hall - Mirpur 2 - Mirpur
        10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Khilkhet -
        Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi -
        Mill Gate - Board Bazar - Gazipur Bypass - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus51" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">BRTC Articulated</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus51">
    <div class="card card-body"><b>Route: </b>Balughat - Cantonment - Bijoy Sarani - Farmgate - Bangla
        Motor - Shahbag - Paltan - Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus52" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Cantonment Bus Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus52">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema Hall -
        Mirpur 1 - Ansar Camp - Technical - Gabtoli - Amin Bazar - Hemayetpur - Savar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus53" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Cantonment Mini Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus53">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Kachukhet - Sainik Club - Kakali - Banani -
        Mohakhali</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus54" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Champion</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus54">
    <div class="card card-body"><b>Route: </b>Vashantek - Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema
        Hall - Mirpur 1 - Ansar Camp - Technical - Gabtoli</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus55" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">City Link</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus55">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - GPO - Paltan - Press Club - High Court - Matsya
        Bhaban - Shahbag - Bata Signal - Science Lab - City College - Jigatola - Dhanmondi 15 - Star
        Kabab - Shankar - Mohammadpur - Bosila - Ghatar Char</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus56" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">D Link</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus56">
    <div class="card card-body"><b>Route: </b>Fulbaria - Chankhar Pul - Bakshi Bazar - Azimpur - Nilkhet
        - New Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate
        - Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Gabtoli - Amin Bazar -
        Hemayetpur - Savar - Dhamrai</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus57" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">D One Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus57">
    <div class="card card-body"><b>Route: </b>Motijheel - Dainik Bangla Moor - Paltan - Press Club -
        Matsya Bhaban - High Court - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Asad Gate -
        College Gate - Shishu Mela - Shyamoli - Kallyanpur - Technical - Gabtoli - Amin Bazar -
        Nobinagar - Dhamrai - Kalampur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus58" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Deepan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus58">
    <div class="card card-body"><b>Route: </b>Tajmahal Road - Shankar - Dhanmondi 15 - Jigatola - City
        College - Science Lab - Shahbag - Matsya Bhaban - Paltan - Gulistan - Motijheel - Arambagh</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus59" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Desh Bangla</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus59">
    <div class="card card-body"><b>Route: </b>Postagola - Dholairpar - Jatrabari - Sayedabad - Mugdapara
        - Bashabo - Khilgaon - Malibagh - Rampura Bazar - Rampura Bridge - Merul - Badda - Uttar Badda -
        Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Chourasta - Kuril
        Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building
        - Abdullahpur - Kamarpara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus60" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dewan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus60">
    <div class="card card-body"><b>Route: </b>Azimpur - Eden College - Nilkhet - New Market - Science
        Lab - City College - Science Lab - Katabon - Shahbag - Bangla Motor - Kawran Bazar - Farmgate -
        Jahangir Gate - Mohakhali - Wireless - Gulshan 1 - Badda - Badda Link Road - Uttar Badda -
        Shahjadpur - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa
        Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus61" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dhaka Chaka</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus61">
    <div class="card card-body"><b>Route: </b>Police Plaza - Gulshan 1 - Gulshan 2</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus62" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dhaka Chaka</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus62">
    <div class="card card-body"><b>Route: </b>Banani - Gulshan 2 - Notun Bazar </div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus63" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dhaka Metro Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus63">
    <div class="card card-body"><b>Route: </b>Mirpur 1 - Kallyanpur - Shyamoli - Asad Gate - Shukrabad
        Kalabagan - Science Lab - New Market - Nilkhet - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus64" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dhaka Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus64">
    <div class="card card-body"><b>Route: </b>Gulistan - Shahbag - Farmgate - Banani - Uttara - Gazipur
        - Shib Bari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus65" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dipon</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus65">
    <div class="card card-body"><b>Route: </b>Tajmahal Road - Salimullah Road - Jakir Hossen Road -
        Shankar - Star Kabab - Dhanmondi 15 - Jigatola - City College - Science Lab - Bata Signal -
        Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - Baitul Mukarram - Gulistan -
        Motijheel - Arambagh</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus66" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Dishari</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus66">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Ansar Camp - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Golap
        Shah Mazar - Naya Bazar - Babubazar - Keraniganj</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus67" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Elite</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus67">
    <div class="card card-body"><b>Route: </b>Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10
        Mirpur 11 - Purobi - Pallabi - Kalshi - Kuril Bishwa Road - Airport - Jashimuddin (Uttara) -
        Rajlakshmi House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus68" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">ETC</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus68">
    <div class="card card-body"><b>Route: </b>Golap Shah Mazar - Shahbag - Bangla Motor Farmgate -
        Agargaon - Shewrapara - Kazipara - Mirpur 10 - Pallabi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus69" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">ETC Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus69">
    <div class="card card-body"><b>Route: </b>Golap Shah Mazar - GPO - Paltan - Press Club - High Court
        - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Khamar Bari - Agargaon -
        Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Purobi - Pallabi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus70" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Everest Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus70">
    <div class="card card-body"><b>Route: </b>Rupnagar Abashik - Mirpur 2 - Mirpur 1 - Khamar Bari
        Farmgate - Gulistan - Keraniganj</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus71" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">First Ten</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus71">
    <div class="card card-body"><b>Route: </b>Vashantek - Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema
        Hall - Mirpur 1 - Ansar Camp - Technical - Gabtoli</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus72" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">FTCL</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus72">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Star Kabab - Jigatola - City
        College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan
        - GPO - Gulistan - Sayedabad - Janapath Moor - Jatrabari - Shonir Akhra - Rayerbag - Matuail -
        Sign Board - Chittagong Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus73" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">FTCL</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus73">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Dhanmondi 15 - Jigatola - City
        College - Science Lab - Shahbag - Matsya Bhaban - Paltan - Gulistan - Motijheel - Arambagh</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus74" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Gazipur Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus74">
    <div class="card card-body"><b>Route: </b>Motijheel - Paltan - Kakrail - Shantinagar - Malibagh Moor
        - Mouchak - Mogbazar - Nabisco - Mohakhali - Chairman Bari - Sainik Club - Kakali - Banani -
        Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) -
        Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi - Station Road - Mill Gate - Board
        Bazar - Gazipur Chourasta - Shib Bari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus75" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Grameen</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus75">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema Hall -
        Mirpur 1 - Ansar Camp - Technical - Gabtoli</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus76" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Grameen Suveccha</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus76">
    <div class="card card-body"><b>Route: </b>Fulbaria - Chankhar Pul - Bakshi Bazar - Azimpur - Nilkhet
        - New Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate
        - Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Gabtoli - Amin Bazar -
        Hemayetpur - Savar - Baipayl - Zirani Bazar - Nandan Park - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus77" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Green Anabil</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus77">
    <div class="card card-body"><b>Route: </b>Chashara - Shibu Market - Jalkuri - Sign Board - Matuail -
        Rayerbag - Shonir Akhra - Jatrabari - Sayedabad - Mugdapara - Bashabo - Khilgaon - Malibagh
        Railgate - Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Uttar Badda - Shahjadpur
        - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road -
        Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur
        - Tongi - Station Road - Mill Gate - Board Bazar - Gazipur Bypass - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus78" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Green Dhaka</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus78">
    <div class="card card-body"><b>Route: </b>Motijheel - Gulistan - GPO - Paltan - Kakrail -
        Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate - Hazipara - Rampura Bazar - Rampura
        Bridge - Merul - Badda - Uttar Badda - Shahjadpur - Bashtola - Notun Bazar - Nadda - Bashundhara
        - Jamuna Future Park - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) -
        Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus79" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Gulshan Chaka</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus79">
    <div class="card card-body"><b>Route: </b>Banani - Gulshan 2 - Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus80" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Haji Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus80">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 10 - Kazipara -
        Shewrapara - Agargaon - Bijoy Sarani - Farmgate - Kawran Bazar - Bangla Motor - Shahbag - Matsya
        Bhaban - High Court - Press Club - Paltan - GPO - Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus81" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Himachal</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus81">
    <div class="card card-body"><b>Route: </b>Mirpur Sony Cinema Hall - Mirpur 10 - Kazipara -
        Shewrapara - Mohakhali - Gulshan 1 - Badda - Rampura Bridge - Rampura Bazar - Khilgaon Khidma
        Hospital</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus82" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Himachal</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus82">
    <div class="card card-body"><b>Route: </b>Metro Hall - Chashara - Shibu Market - Jalkuri - Sign
        Board - Matuail - Rayerbag - Shonir Akhra - Jatrabari - Janapath Moor - Gulistan - GPO - Paltan
        - Press Club - High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate
        Bijoy Sarani - Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Purobi
        Pallabi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus83" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Himalay</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus83">
    <div class="card card-body"><b>Route: </b>Madanpur - Jatrabari - Bangladesh Bank - Mogbazar
        Mohakhali - Tongi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus84" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Itihash</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus84">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema Hall Mirpur
        1 - Ansar Camp - Technical - Gabtoli - Amin Bazar - Hemayetpur - Savar - Nobinagar Baipayl -
        Zirani Bazar - Nandan Park - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus85" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">J M Super Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus85">
    <div class="card card-body"><b>Route: </b>Jatrabari - Sayedabad - Mugdapara - Bashabo - Khilgaon -
        Malibagh Railgate - Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Uttar Badda -
        Shahjadpur - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa
        Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building -
        Abdullahpur - Tongi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus86" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Jabale Noor Paribahan 1</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus86">
    <div class="card card-body"><b>Route: </b>Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10
        Mirpur 11 - Purobi - Pallabi - Kalshi - Kuril Bishwa Road - Airport - Jashimuddin (Uttara) -
        Rajlakshmi House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus87" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Jabale Nur Paribahan 2</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus87">
    <div class="card card-body"><b>Route: </b>Gabtoli - Mirpur 1 - Mirpur 10 - Kalshi - Kuril Flyover
        Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus88" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Janjabil</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus88">
    <div class="card card-body"><b>Route: </b>Gabtoli - Beribadh Tin Rastar Moor - Rayer Bazar - Sikder
        Medical College - Hazaribag - Nawabganj - Kamrangirchar - Showari Ghat - Mitford Ghat -
        Babubazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus89" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Kamal Plus Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus89">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar - Azimpur - Nilkhet - New
        Market - Science Lab - City College - Jigatola - Dhanmondi 15 - Star Kabab - Shankar -
        Mohammadpur - Ghatar Char</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus90" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Kanak</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus90">
    <div class="card card-body"><b>Route: </b>Mirpur 1 - Sony Cenema Hall - Mirpur 2 - Mirpur 10 Mirpur
        11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Khilkhet - Airport
        Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus91" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Kanak</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus91">
    <div class="card card-body"><b>Route: </b>Mirpur 1 - Sony Cenema Hall - Mirpur 2 - Mirpur 10 -
        Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Khilkhet - Airport
        - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus92" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Khajababa</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus92">
    <div class="card card-body"><b>Route: </b>Jatrabari - Sayedabad - Gulistan - GPO - Paltan - Press
        Club - High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Khamar
        Bari - Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Purobi - Pallabi -
        Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus93" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Kironmala Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus93">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Sony Cenema Hall - Rupnagar -
        Birulia - Ashulia - Zirabo - Narshinghapur - Sura Bari - Kashimpur - Jarun - Konabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus94" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Labbayek</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus94">
    <div class="card card-body"><b>Route: </b>Savar - Hemayetpur - Amin Bazar - Gabtoli - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Mogbazar - Mouchak - Malibagh Moor - Rajarbag - Khilgaon Flyover -
        Bashabo - Mugdapara - Manik Nagar - Golapbag Chourasta - Sayedabad - Janapath Moor - Jatrabari -
        Kazla - Shonir Akhra - Rayerbag - Matuail - Sign Board</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus95" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Lal Sabuj (AC)</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus95">
    <div class="card card-body"><b>Route: </b>Nandan Park - Zirani Bazar - Baipayl - Nobinagar - Savar -
        Hemayetpur - Amin Bazar - Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela - College
        Gate - Asad Gate - Khamar Bari - Farmgate - Kawran Bazar - Bangla Motor - Shahbag - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus96" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Lams Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus96">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 1 -
        Kazipara - Shewrapara - Taltola - Agargaon - Bijoy Sarani - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - Dainik Bangla Moor -
        Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus97" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Malancha</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus97">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Star Kabab - Dhanmondi 15 -
        Jigatola - City College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - High Court -
        Press Club - Paltan - GPO - Gulistan - Dayaganj - Dhupkhola</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus98" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Manjil Express</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus98">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - GPO - Paltan - Kakrail - Malibagh Moor - Mouchak -
        Mogbazar - Satrasta - Nabisco - Mohakhali - Chairman Bari - Banani - Kakali - Staff Road - MES -
        Shewra - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur -
        House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus99" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Meghla Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus99">
    <div class="card card-body"><b>Route: </b>Kalabagan - Science Lab - Katabon - Bata Signal - Shahbag
        - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Gulistan - Sayedabad - Jatrabari -
        Shonir Akhra - Sign Board - Kanchpur - Vulta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus100" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Meshkat</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus100">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Asad Gate - Khamar Bari - Farmgate - Bangla
        Motor - Shahbag - Matsya Bhaban - Paltan - Dainik Bangla Moor - Motijheel - Ittefaq Moor
        Sayedabad - Jatrabari - Shanir Akhra - Rayerbag - Matuail - Sign Board - Chittagong Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus101" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Midline</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus101">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Star Kabab - Dhanmondi 15 -
        Jigatola - City College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - High Court -
        Press Club - Paltan - Gulistan - Motijheel - Arambagh - Kamalapur - Bashabo - Khilgaon</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus102" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Mirpur Metro Services</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus102">
    <div class="card card-body"><b>Route: </b>Azimpur - Nilkhet - New Market - Science Lab - City
        College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate - Shishu Mela -
        Shyamoli - Kallyanpur - Darussalam - Technical - Bangla College - Tolarbag - Ansar Camp - Mirpur
        1</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus103" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Mirpur link</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus103">
    <div class="card card-body"><b>Route: </b>ECB Square - Purobi - Mirpur 11 - Mirpur 10 - Kazipara
        Shewrapara - Agargaon - Khamar Bari - Dhanmondi 27 - Dhanmondi 32 - City College - New Market
        Nilkhet - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus104" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Mirpur Mission</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus104">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Khamar Bari - Farmgate - Press
        Club - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus105" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Mirpur Transport Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus105">
    <div class="card card-body"><b>Route: </b>Gulistan - Golap Shah Mazar - GPO - Paltan - Press Club -
        High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Khamar Bari -
        Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Purobi - Pallabi - Mirpur
        12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus106" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Mirpur United Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus106">
    <div class="card card-body"><b>Route: </b>Sadarghat - Ray Saheb Bazar - Naya Bazar - Golap Shah
        Mazar - GPO - Paltan - Press Club - High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran
        Bazar - Farmgate - Khamar Bari - Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur
        11 - Purobi - Pallabi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus107" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">MM Lovely</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus107">
    <div class="card card-body"><b>Route: </b>Savar - Hemayetpur - Amin Bazar - Gabtoli - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Mogbazar - Mouchak - Malibagh Moor - Rajarbag - Khilgaon Flyover -
        Bashabo - Mugdapara - Manik Nagar - Golapbag Chourasta - Sayedabad - Janapath Moor - Jatrabari -
        Kazla - Shonir Akhra - Rayerbag - Matuail - Sign Board</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus108" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Modhumoti</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus108">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Sony Cenema Hall - Mirpur 2 - Mirpur 1 -
        Ansar Camp - Technical - Kallyanpur - Shyamoli - Shishu Mela - Agargaon - Bijoy Sarani -
        Jahangir Gate - Mohakhali - Wireless - Gulshan 1 - Badda Link Road - Merul - Rampura Bridge -
        Banasree - Demra Staff Quarter</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus109" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Mohona</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus109">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema Hall -
        Mirpur 1 - Mazar Road - Konabari - Rupnagar - Beribadh - Birulia - Ashulia - Zirabo - Fantasy
        Kingdom</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus110" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Moitri</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus110">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Star Kabab - Dhanmondi 15 -
        Jigatola - City College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel - Arambagh</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus111" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Moumita</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus111">
    <div class="card card-body"><b>Route: </b>Chashara - Shibu Market - Jalkuri - Sign Board - Matuail -
        Rayerbag - Shonir Akhra - Jatrabari - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar -
        Azimpur - Nilkhet - New Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad
        Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Gabtoli -
        Amin Bazar - Hemayetpur - Savar - Baipayl - Zirani Bazar - Nandan Park - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus112" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">MTCL 2</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus112">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Asad Gate - Dhanmondi 27 - Dhanmondi 32 -
        Shukrabad - Kalabagan - City College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban -
        High Court - Press Club - Paltan - GPO - Gulistan - Motijheel - Arambagh</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus113" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Nabakali</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus113">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Ansar Camp - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Dhanmondi 27 - Shukrabad -
        Dhanmondi 32 - Kalabagan - Science Lab - Katabon - Shahbag - High Court - Fulbaria - Naya Bazar
        - Babubazar - Keraniganj</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus114" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">New Vision</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus114">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Ansar Camp - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Shahbag - High Court - Press Club - Paltan - Dainik Bangla Moor -
        Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus115" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Nilachol</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus115">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar - Azimpur - Nilkhet - New
        Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate -
        Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Gabtoli - Amin Bazar - Hemayetpur
        - Savar - Nobinagar - Manikganj - Paturia</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus116" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Nishrgo</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus116">
    <div class="card card-body"><b>Route: </b>Mirpur 14 Bus Stand - Mirpur 10 - Kazipara - Shewrapara -
        Taltola - Agargaon - Asad Gate - Shyamoli - Mohammadpur - Shankar - Dhanmondi 15 - Jigatola -
        Science Lab - Dhaka College - New Market - Nilkhet - Eden College - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus117" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 13 Bus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus117">
    <div class="card card-body"><b>Route: </b>Mohammadpur - Shankar - Star Kabab - Dhanmondi 15 -
        Jigatola - City College - Science Lab - New Market - Nilkhet - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus118" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 4 Alike</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus118">
    <div class="card card-body"><b>Route: </b>Balughat - Signal - CMH - Garrison (Cantonment) - Adamjee
        College - Workshop - Jahangir Gate - Bijoy Sarani - Farmgate - Bangla Motor - Shahbag - Paltan -
        Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus119" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 6 Bus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus119">
    <div class="card card-body"><b>Route: </b>Kamalapur - Motijheel - Gulistan - GPO - Paltan - Kakrail
        - Shantinagar - Malibagh Moor - Mouchak - Mogbazar - Kawran Bazar - Farmgate - Jahangir Gate -
        Bijoy Sarani - Mohakhali - Gulshan 1 - Gulshan 2 - Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus120" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 6 Motijheel Banani Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus120">
    <div class="card card-body"><b>Route: </b>Kamalapur - Motijheel - Gulistan - GPO - Paltan - Kakrail
        - Shantinagar - Malibagh Moor - Mouchak - Mogbazar - Kawran Bazar - Farmgate - Jahangir Gate -
        Bijoy Sarani - Mohakhali - Gulshan 1 - Gulshan 2 - Notun Bazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus121" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 7 Bus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus121">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela
        - College Gate - Asad Gate - Dhanmondi 27 - Dhanmondi 32 - Kalabagan - Science Lab - Katabon -
        Shahbag - High Court - Press Club - Paltan - GPO - Golap Shah Mazar - Gulistan - Naya Bazar -
        Ray Saheb Bazar - Sadarghat</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus122" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 8 Bus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus122">
    <div class="card card-body"><b>Route: </b>Jatrabari - Janapath Moor - Sayedabad - Motijheel - Dainik
        Bangla Moor - Paltan - Press Club - Matsya Bhaban - High Court - Shahbag - Bangla Motor - Kawran
        Bazar - Farmgate - Khamar Bari - Asad Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur
        - Technical - Gabtoli</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus123" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">No. 9 Bus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus123">
    <div class="card card-body"><b>Route: </b>College Gate - Shishu Mela - Shyamoli - Kallyanpur -
        Darussalam - Technical - Bangla College - Tolarbag - Ansar Camp - Mirpur 1 - Sony Cenema Hall -
        Mirpur 2 - Proshika Moor - Pallabi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus124" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Nur E Makka</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus124">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Sony Cenema Hall - Mirpur 2 - Mirpur 10 -
        Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Jamuna Future Park
        - Bashundhara - Nadda - Notun Bazar - Bashtola - Shahjadpur - Uttar Badda - Badda - Madhya Badda
        - Merul - Rampura Bridge - Rampura Bazar - Hazipara - Malibagh Railgate</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus125" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Omama International</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus125">
    <div class="card card-body"><b>Route: </b>Motijheel - Dainik Bangla Moor - Paltan - Press Club -
        Matsya Bhaban - High Court - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Jahangir Gate -
        Mohakhali - Chairman Bari - Sainik Club - Banani - Kakali - Staff Road - MES - Shewra - Kuril
        Bishwa Road - Khilkhet - Airport</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus126" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">One Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus126">
    <div class="card card-body"><b>Route: </b>Nandan Park - Zirani Bazar - Baipayl - Nobinagar - Savar -
        Hemayetpur - Amin Bazar - Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela - College
        Gate - Asad Gate - Khamar Bari - Farmgate - Kawran Bazar - Bangla Motor - Shahbag - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus127" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Pallabi Local Service</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus127">
    <div class="card card-body"><b>Route: </b>Asad Gate - College Gate - Shishu Mela - Shyamoli -
        Kallyanpur - Technical - Mirpur 1 - Sony Cenema Hall - Mirpur 2 - Chalantika Moor - Mirpur 6 -
        Mirpur 11 - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus128" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Pallabi Super</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus128">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Ansar Camp - Mirpur 1 - Sony Cenema
        Hall - Mirpur 2 - Mirpur 10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril
        Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building
        Abdullahpur - Kamarpara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus129" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Paristhan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus129">
    <div class="card card-body"><b>Route: </b>Bosila - Mohammadpur - Asad Gate - College Gate - Shyamoli
        - Kallyanpur - Darussalam - Technical - Bangla College - Tolarbag - Ansar Camp - Mirpur 1 -
        Mirpur 2 - Mirpur 10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Kuril
        Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - House Building -
        Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus130" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Power Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus130">
    <div class="card card-body"><b>Route: </b>Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema Hall -
        Mirpur 1 - Mazar Road - Konabari - Rupnagar - Beribadh - Birulia - Ashulia - Zirabo -
        Narshinghapur - Sura Bari - Kashimpur - Jarun - Konabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus131" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Prattay</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus131">
    <div class="card card-body"><b>Route: </b>Gabtoli - Beribadh Tin Rastar Moor - Rayer Bazar - Sikder
        Medical College - Hazaribag - Nawabganj - Kamrangirchar - Showari Ghat - Mitford Ghat -
        Babubazar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus132" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Prochesta</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus132">
    <div class="card card-body"><b>Route: </b>Maowa - Keraniganj - Babubazar - Naya Bazar - Golap Shah
        Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate -
        Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Uttar Badda - Shahjadpur - Bashtola
        - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road - Khilkhet -
        Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus133" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Projapati</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus133">
    <div class="card card-body"><b>Route: </b>Bosila - Mohammadpur - Asad Gate - College Gate - Shyamoli
        - Kallyanpur - Darussalam - Technical - Bangla College - Ansar Camp - Mirpur 1 - Mirpur 2 Mirpur
        10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Kuril Bishwa Road Khilkhet
        - Airport - Jashimuddin (Uttara) - Rajlakshmi - House Building - Abdullahpur - Kamarpara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus134" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Provati Banasree</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus134">
    <div class="card card-body"><b>Route: </b>Fulbaria - Golap Shah Mazar - GPO - Paltan - Kakrail -
        Shantinagar - Malibagh Moor - Mogbazar - Satrasta - Nabisco - Mohakhali - Chairman Bari - Banani
        - Kakali - Staff Road - MES - Shewra - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin
        (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi - Station Road - Mill
        Gate - Board Bazar - Gazipur Chourasta - Joydebpur - Sreepur - Baromi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus135" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Purbachol Logistics &amp; Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus135">
    <div class="card card-body"><b>Route: </b>Vashantek - Mirpur 14 - Mirpur 10 - Mirpur 2 - Sony Cenema
        Hall - Mirpur 1 - Ansar Camp - Technical - Gabtoli - Amin Bazar - Hemayetpur - Savar - Baipayl -
        Zirani Bazar - Nandan Park - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus136" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Raida</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus136">
    <div class="card card-body"><b>Route: </b>Postagola - Dholairpar - Jatrabari - Janapath Moor -
        Sayedabad - Mugdapara - Bashabo - Khilgaon - Malibagh Railgate - Rampura Bazar - Rampura Bridge
        - Merul - Badda - Uttar Badda - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future
        Park - Kuril Chourasta - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) -
        Rajlakshmi - Azampur - House Building - Diabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus137" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Raja City</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus137">
    <div class="card card-body"><b>Route: </b>Postagola - Jurain - Dayaganj - Gulistan - GPO - Paltan -
        Press Club - High Court - Shahbag - Bata Signal - Science Lab - City College - Jigatola -
        Dhanmondi 15 - Star Kabab - Shankar - Mohammadpur - Bosila - Ghatar Char</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus138" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Rajanigandha</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus138">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - GPO - Paltan - Press Club - High Court - Shahbag -
        Bata Signal - Science Lab - Jigatola - Dhanmondi 15 - Star Kabab - Shankar - Mohammadpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus139" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Rajdhani Super</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus139">
    <div class="card card-body"><b>Route: </b>Hemayetpur - Gabtoli - Technical - Ansar Camp - Mirpur 1 -
        Sony Cenema Hall - Mirpur 2 - Mirpur 10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES -
        Shewra - Kuril Bishwa Road - Jamuna Future Park - Bashundhara - Nadda - Notun Bazar - Bashtola -
        Shahjadpur - Uttar Badda - Badda - Madhya Badda - Merul - Rampura Bridge - Banasree - Demra
        Staff Quarter</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus140" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Ramjan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus140">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela
        - College Gate - Asad Gate - Mohammadpur - Shankar - Star Kabab - Dhanmondi 15 - Jigatola - City
        College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - Kakrail - Shantinagar - Malibagh
        Moor - Mouchak - Malibagh Railgate - Hazipara - Rampura Bazar - Rampura Bridge - Banasree -
        Demra Staff Quarter</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus141" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Robrob</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus141">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical -Ansar Camp - Mirpur 1 - Mirpur 2
        Mirpur 10 - Purobi - Kalshi - ECB Square - MES - Banani - Kakali - Gulshan 2 - Gulshan 1 - Badda
        Link Road - Merul - Rampura Bridge - Banasree</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus142" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Rois</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus142">
    <div class="card card-body"><b>Route: </b>Mirpur Sony Cinema Hall - Mirpur 2 - Mirpur 10 - Kazipara
        - Shewrapara - Agargaon - Mohakhali - Gulshan 1 - Badda - Rampura Bridge - Banasree</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus143" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Rongdhonu Express</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus143">
    <div class="card card-body"><b>Route: </b>Adabor - Mohammadpur - Shia Mosque - Shyamoli - College
        Gate - Asad Gate - Kalabagan - Science Lab - Katabon - Bata Signal - Shahbag - Kakrail -
        Fakirapul - Motijheel - Dayaganj - Postagola</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus144" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Runway Express</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus144">
    <div class="card card-body"><b>Route: </b>Keraniganj - Kadamtali - Babubazar - Naya Bazar - Golap
        Shah Mazar - GPO - Paltan - Press Club - High Court - Matsya Bhaban - Shahbag - Bangla Motor -
        Kawran Bazar - Farmgate - Agargaon - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Mirpur 12 -
        ECB Square</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus145" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Rupa Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus145">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Ansar Camp - Mirpur 1 - Sony Cenema
        Hall - Mirpur 2 - Mirpur 10 - Mirpur 14 - Vashantek</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus146" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Rupkotha</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus146">
    <div class="card card-body"><b>Route: </b>Gabtoli - Mirpur 1 - Sony Cenema Hall - Mirpur 2 - Mirpur
        10 - Mirpur 11 - Purobi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Khilkhet -
        Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus147" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Safety Druti</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus147">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Khamar Bari - Dhanmondi 27 - Dhanmondi 32 -
        Kalabagan - City College - New Market - Nilkhet - Azimpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus148" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Sakalpa-transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus148">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Sony Cenema Hall - Mirpur 2 -
        Mirpur 10 - Kazipara - Shewrapara - Agargaon - Bijoy Sarani - Farmgate - Bangla Motor - Mogbazar
        - Malibagh Moor - Kamalapur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus149" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Salsabil</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus149">
    <div class="card card-body"><b>Route: </b>Postagola - Dholairpar - Jatrabari - Sayedabad - Mugdapara
        - Bashabo - Khilgaon - Malibagh Railgate - Rampura Bazar - Rampura Bridge - Merul - Badda -
        Uttar Badda - Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril
        Chourasta - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur
        - House Building - Abdullahpur - Tongi - Station Road - Mill Gate - Board Bazar - Gazipur Bypass
        - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus150" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Savar Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus150">
    <div class="card card-body"><b>Route: </b>Sadarghat - Golap Shah Mazar - GPO - Paltan - Press Club -
        High Court - Matsya Bhaban - Shahbag - Science Lab - Kalabagan - Dhanmondi 32 - Dhanmondi 27 -
        Asad Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical -
        Gabtoli - Amin Bazar - Hemayetpur - Savar - Baipayl - Zirani Bazar - Nandan Park</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus152" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shadhin</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus152">
    <div class="card card-body"><b>Route: </b>Bosila - Mohammadpur - Asad Gate - Khamar Bari - Farmgate
        - Kawran Bazar - Bangla Motor - Mogbazar - Mouchak - Malibagh Railgate - Hazipara - Rampura
        Bazar - Rampura Bridge - Banasree - Demra Staff Quarter</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus153" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shadhin Express</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus153">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Khamar Bari - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - High Court - Press Club - Paltan - GPO - Golap Shah Mazar - Naya Bazar -
        Babubazar - Keraniganj - Kadamtali - Rajendrapur - Maowa</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus154" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shahria Enterprise</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus154">
    <div class="card card-body"><b>Route: </b>Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela
        - College Gate - Asad Gate - Dhanmondi 27 - Dhanmondi 32 - Shukrabad - Kalabagan - City College
        - Science Lab - Katabon - Shahbag - Matsya Bhaban - Kakrail - Fakirapul - Arambagh - Motijheel -
        Ittefaq Moor - Tikatuli - Dayaganj - Gandaria - Jurain - Postagola</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus155" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shatabdi</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus155">
    <div class="card card-body"><b>Route: </b>Motijheel - Paltan - Kakrail - Malibagh Moor - Mouchak -
        Mogbazar - Satrasta - Nabisco - Mohakhali - Chairman Bari - Banani - Kakali - Shewra - Kuril
        Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building
        - Abdullahpur - Kamarpara</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus156" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shikhar Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus156">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Bijoy Sarani - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Gulistan - Janapath
        Moor - Jatrabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus157" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shikor Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus157">
    <div class="card card-body"><b>Route: </b>Jatrabari - Sayedabad - Gulistan - GPO - Paltan - Press
        Club - High Court - Matsya Bhaban - Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Bijoy
        Sarani - Agargaon - IDB - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Pallabi -
        Purobi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus158" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shuveccha</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus158">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar - Dhakeshwari - Azimpur -
        Nilkhet - New Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate -
        College Gate - Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Gabtoli - Amin
        Bazar - Hemayetpur - Savar - Nobinagar - Baipayl - Zirani Bazar - Nandan Park - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus159" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Shuvojatra</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus159">
    <div class="card card-body"><b>Route: </b>Fulbaria - Golap Shah Mazar - GPO - Paltan - Press Club -
        High Court - Matsya Bhaban - Shahbag - Bata Signal - Science Lab - Kalabagan - Dhanmondi 32 -
        Dhanmondi 27 - Asad Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur - Darussalam -
        Technical - Gabtoli - Amin Bazar - Hemayetpur - Manikganj</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus160" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Siyam Transport</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus160">
    <div class="card card-body"><b>Route: </b>Banasree - Rampura Bridge - Merul - Badda - Shahjadpur -
        Bashtola - Notun Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road - Khilkhet
        - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur -
        Kamarpara - Dhour - Beribadh - Ashulia - Zirabo - Fantasy Kingdom - Jamgora - Shimultola -
        Baipayl - Palli Bidyut - Savar Cantonment - Nobinagar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus161" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Skyline</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus161">
    <div class="card card-body"><b>Route: </b>Sadarghat - Ray Saheb Bazar - Naya Bazar - Golap Shah
        Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Nabisco - Mohakhali -
        Chairman Bari - Sainik Club - Banani - Kakali - Staff Road - MES - Shewra - Kuril Bishwa Road -
        Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur
        - Tongi - Station Road - Mill Gate - Board Bazar - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus162" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Somota Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus162">
    <div class="card card-body"><b>Route: </b>Chittagong Road - Sign Board - Matuail - Rayerbag - Shonir
        Akhra - Jatrabari - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar - Dhakeshwari - Azimpur -
        Nilkhet - New Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate -
        College Gate - Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Ansar Camp -
        Mirpur 1 - Rainkhola - Chiriyakhana</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus163" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Somoy</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus163">
    <div class="card card-body"><b>Route: </b>Sign Board - Matuail - Rayerbag - Shonir Akhra - Jatrabari
        - Sayedabad Janapath Moor - Gulistan - GPO - Paltan - Press Club - High Court - Matsya Bhaban -
        Shahbag - Bangla Motor - Kawran Bazar - Farmgate - Bijoy Sarani - Agargaon - IDB - Taltola -
        Shewrapara - Kazipara - Mirpur 10 - Mirpur 11 - Pallabi - Purobi - Mirpur 12</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus164" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Somoy Niyantran</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus164">
    <div class="card card-body"><b>Route: </b>Mirpur 12 - Pallabi - Purobi - Mirpur 11 - Mirpur 10 -
        Kazipara - Shewrapara - Taltola - Agargaon - Bijoy Sarani - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Golap Shah Mazar -
        Naya Bazar - Babubazar - Keraniganj</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus165" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Super bus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus165">
    <div class="card card-body"><b>Route: </b>Gulistan - Shahbag - Farmgate - Shyamoli - Gabtoli - Savar
        - Nobinagar</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus166" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Supravat</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus166">
    <div class="card card-body"><b>Route: </b>Victoria Park - Sadarghat - Ray Saheb Bazar - Golap Shah
        Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate -
        Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Shahjadpur - Bashtola - Notun Bazar
        - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road - Khilkhet - Airport -
        Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus167" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Swajan Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus167">
    <div class="card card-body"><b>Route: </b>Savar - Hemayetpur - Amin Bazar - Gabtoli - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Shahbag - High Court - Press Club - Paltan - GPO - Golap Shah Mazar -
        Naya Bazar - Ray Saheb Bazar - Sadarghat</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus168" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Talukdar</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus168">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Ansar Camp - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Mogbazar - Mouchak - Malibagh Moor - Rajarbag - Khilgaon Flyover -
        Bashabo - Mugdapara - Manik Nagar - Golapbag Chourasta - Sayedabad - Janapath Moor - Jatrabari -
        Kazla - Shonir Akhra - Rayerbag - Matuail - Sign Board - Sanarpar - Chittagong Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus169" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Tanjil Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus169">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Ansar Camp - Technical -
        Kallyanpur - Shyamoli - Shishu Mela - College Gate - Asad Gate - Khamar Bari - Farmgate - Kawran
        Bazar - Bangla Motor - Shahbag - High Court - Press Club - Paltan - GPO - Golap Shah Mazar -
        Naya Bazar - Ray Saheb Bazar - Sadarghat</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus170" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Taranga plus</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus170">
    <div class="card card-body"><b>Route: </b>Mohammadpur Bus Stand - Shankar - Star Kabab - Dhanmondi
        15 - Jigatola - City College - Science Lab - Bata Signal - Shahbag - Matsya Bhaban - Kakrail -
        Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate - Hazipara - Rampura Bazar - Rampura
        Bridge - Banasree - South Banasree</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus171" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Tetulia</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus171">
    <div class="card card-body"><b>Route: </b>Shia Mosque - Japan Garden City - Ring road - Adabor
        Shyamoli - Shishu Mela - Agargaon - Taltola - Shewrapara - Kazipara - Mirpur 10 - Mirpur 11
        Purobi - Pallabi - Kalshi - ECB Square - MES - Shewra - Kuril Bishwa Road - Airport -
        Jashimuddin (Uttara) - Rajlakshmi - House Building - Abdullahpur</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus172" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Thikana</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus172">
    <div class="card card-body"><b>Route: </b>Sign Board - Matuail - Rayerbag - Shonir Akhra - Jatrabari
        - Sayedabad - Gulistan - Chankhar Pul - Bakshi Bazar - Dhakeshwari - Azimpur - Nilkhet - New
        Market - City College - Kalabagan - Dhanmondi 32 - Dhanmondi 27 - Asad Gate - College Gate -
        Shishu Mela - Shyamoli - Kallyanpur - Darussalam - Technical - Gabtoli - Amin Bazar - Hemayetpur
        - Savar - Baipayl - Zirani Bazar - Nandan Park - Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus173" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Thikana Express</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus173">
    <div class="card card-body"><b>Route: </b>Shonbari Sreenagar - Nimtola - Kuchimura - Rajendrapur -
        Hasnabad - Postagola - Jurain - Dholairpar - Jatrabari - Sayedabad - Gulistan - Chankhar Pul -
        Bakshi Bazar - Azimpur - Nilkhet - New Market - City College - Kalabagan - Dhanmondi 32 -
        Dhanmondi 27 - Asad Gate - College Gate - Shishu Mela - Shyamoli - Kallyanpur - Darussalam -
        Technical - Gabtoli - Amin Bazar - Hemayetpur - Savar - Baipayl - Zirani Bazar - Nandan Park -
        Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus174" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Titas</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus174">
    <div class="card card-body"><b>Route: </b>Chiriyakhana - Mirpur 1 - Gabtoli - Savar - Nobinagar
        Chandra</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus175" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Transilva</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus175">
    <div class="card card-body"><b>Route: </b>Mirpur 1 - Ansar Camp - Technical - Kallyanpur - Shyamoli
        - Shishu Mela - College Gate - Asad Gate - Dhanmondi 27 - Dhanmondi 32 - Kalabagan - Science Lab
        - Bata Signal - Shahbag - Matsya Bhaban - High Court - Press Club - Paltan - GPO - Gulistan -
        Motijheel - Sayedabad - Janapath Moor - Jatrabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus176" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Trust Transport Services</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus176">
    <div class="card card-body"><b>Route: </b>Mirpur 10 - Mirpur 13 - Mirpur 14 - Kachukhet - Sainik
        Club - Banani</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus177" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Trust Transport Services</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus177">
    <div class="card card-body"><b>Route: </b>Mirpur 10 - Mirpur 13 - Mirpur 14 - Kachukhet - Workshop -
        Saudi Colony - Jahangir Gate - Farmgate - Kawran Bazar - Bangla Motor - Shahbag</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus178" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Trust Transport Services</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus178">
    <div class="card card-body"><b>Route: </b>Mirpur DOHS - Kalshi - ECB Square - Garrison (Cantonment)
        - Adamjee School - Workshop - Saudi Colony - Jahangir Gate - Farmgate - Kawran Bazar - Bangla
        Motor - Shahbag - High Court - Press Club - Paltan - Dainik Bangla Moor - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus179" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Trust Transport Services (AC)</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus179">
    <div class="card card-body"><b>Route: </b>Mirpur DOHS - Kalshi - ECB Square - Garrison (Cantonment)
        - Adamjee School - Workshop - Saudi Colony - Jahangir Gate - Farmgate - Kawran Bazar </div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus180" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Turag</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus180">
    <div class="card card-body"><b>Route: </b>Jatrabari - Sayedabad - Mugdapara - Bashabo - Khilgaon -
        Malibagh Moor - Rampura Bazar - Rampura Bridge - Merul - Badda - Uttar Badda - Bashtola - Notun
        Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Chourasta - Kuril Bishwa Road -
        Khilkhet - Airport - Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Abdullahpur
        - Tongi</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus181" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Victor Classic</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus181">
    <div class="card card-body"><b>Route: </b>Sadarghat - Ray Saheb Bazar - Naya Bazar - Golap Shah
        Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate -
        Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Shahjadpur - Bashtola - Notun Bazar
        - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road - Khilkhet - Airport -
        Jashimuddin (Uttara) - Rajlakshmi - Azampur - House Building - Diabari</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus182" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Victor Paribahan</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus182">
    <div class="card card-body"><b>Route: </b>Sadarghat - Ray Saheb Bazar - Naya Bazar - Golap Shah
        Mazar - GPO - Paltan - Kakrail - Shantinagar - Malibagh Moor - Mouchak - Malibagh Railgate -
        Hazipara - Rampura Bazar - Rampura Bridge - Merul - Badda - Shahjadpur - Bashtola - Notun Bazar
        - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus183" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">VIP 27</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus183">
    <div class="card card-body"><b>Route: </b>Azimpur - Nilkhet - New Market - City College - Kalabagan
        - Banani - Kakali - MES - Shewra - Kuril Bishwa Road - Khilkhet - Airport - Jashimuddin (Uttara)
        - Rajlakshmi - Azampur - House Building - Abdullahpur - Tongi - Station Road - Mill Gate - Board
        Bazar - Gazipur Chourasta</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus184" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Welcome</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus184">
    <div class="card card-body"><b>Route: </b>Nandan Park - Zirani Bazar - Baipayl - Nobinagar - Savar -
        Hemayetpur - Amin Bazar - Gabtoli - Technical - Kallyanpur - Shyamoli - Shishu Mela - College
        Gate - Asad Gate - Khamar Bari - Farmgate - Kawran Bazar - Bangla Motor - Shahbag - High Court -
        Press Club - Paltan - GPO - Gulistan - Motijheel</div>
</div>
</li>
<li><a class="btn btn-primary" data-toggle="collapse" onclick="admob.interstitial.show()" href="#Bus185" role="button" aria-expanded="false" style="color: white; background-color:lightseagreen;">Winner</a>
<div class="collapse" data-parent="#BusRouteAccordion" id="Bus185">
    <div class="card card-body"><b>Route: </b>Azimpur - Eden College - Nilkhet - New Market - Science
        Lab - City College - Kalabagan - Panthapath - Kawran Bazar - Bot tola - Nabisco - Mohakhali -
        Wireless - Gulshan 1 - Badda - Badda Link Road - Uttar Badda - Shahjadpur - Bashtola - Notun
        Bazar - Nadda - Bashundhara - Jamuna Future Park - Kuril Bishwa Road</div>
</div>
</li>`;

const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');

const listItems = doc.querySelectorAll('li');
const jsonData = [];

listItems.forEach(li => {
  const route = li.querySelector('div.card-body').textContent.trim();
  const BusNmae = li.querySelector('a.btn.btn-primary').textContent.trim();
  const Routes = route.split('-').map(w => w.trim().replace(/\n       /g, '').replace(/Route: /g, ''));
  jsonData.push({ BusNmae, Routes });
});

const jsonStr = JSON.stringify(jsonData);
console.log(jsonStr);
console.log(jsonData)