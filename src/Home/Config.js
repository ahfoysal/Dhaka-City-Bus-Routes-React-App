function autocomplete(_0x42fc48, _0x1b4683) {
    var _0x1b4e2b;
    _0x42fc48.addEventListener('input', function (_0x4cafeb) {
        var _0x579f49, _0xf09134, _0x4f79a5, _0x169605 = this.value;
        _0x3c106a();
        if (!_0x169605) return false;
        _0x1b4e2b = -0x1, _0x579f49 = document.createElement('DIV'), _0x579f49.setAttribute('id', this.id + 'autocomplete-list'), _0x579f49.setAttribute('class', 'autocomplete-items'), this.parentNode.appendChild(_0x579f49);
        for (_0x4f79a5 = 0x0; _0x4f79a5 < _0x1b4683.length; _0x4f79a5++) {
            _0x1b4683[_0x4f79a5].substr(0x0, _0x169605.length).toUpperCase() == _0x169605.toUpperCase() && (_0xf09134 = document.createElement('DIV'), _0xf09134.innerHTML = '<strong>' + _0x1b4683[_0x4f79a5].substr(0x0, _0x169605.length) + '</strong>', _0xf09134.innerHTML += _0x1b4683[_0x4f79a5].substr(_0x169605.length), _0xf09134.innerHTML += '<input type=\'hidden\' value=\'' + _0x1b4683[_0x4f79a5] + '\'>', _0xf09134.addEventListener('click', function (_0x3f0764) {
                _0x42fc48.value = this.getElementsByTagName('input')[0x0].value, _0x3c106a();
            }), _0x579f49.appendChild(_0xf09134));
        }
    });

    function _0x398d28(_0x47e6dc) {
        if (!_0x47e6dc) return false;
        _0x4b717d(_0x47e6dc);
        if (_0x1b4e2b >= _0x47e6dc.length) _0x1b4e2b = 0x0;
        if (_0x1b4e2b < 0x0) _0x1b4e2b = _0x47e6dc.length - 0x1;
        _0x47e6dc[_0x1b4e2b].classList.add('autocomplete-active');
    }

    function _0x4b717d(_0x1a829f) {
        for (var _0x1f3184 = 0x0; _0x1f3184 < _0x1a829f.length; _0x1f3184++) {
            _0x1a829f[_0x1f3184].classList.remove('autocomplete-active');
        }
    }

    function _0x3c106a(_0x56587f) {
        var _0x59725d = document.getElementsByClassName('autocomplete-items');
        for (var _0x51f77f = 0x0; _0x51f77f < _0x59725d.length; _0x51f77f++) {
            _0x56587f != _0x59725d[_0x51f77f] && _0x56587f != _0x42fc48 && _0x59725d[_0x51f77f].parentNode.removeChild(_0x59725d[_0x51f77f]);
        }
    }
    document.addEventListener('click', function (_0x502dda) {
        _0x3c106a(_0x502dda.target);
    });
}
var locations = ['300 Feet', 'Abdullahpur', 'Adabor', 'Adamjee College', 'Adamjee School', 'Agargaon', 'Airport', 'Amin Bazar', 'Ansar Camp', 'Arambagh', 'Asad Gate', 'Ashulia', 'Ashulia Bazar', 'Azampur', 'Azimpur', 'Babubazar', 'Badda', 'Badda Link Road', 'Baipayl', 'Baitul Mukarram', 'Bakshi Bazar', 'Balughat', 'Banani', 'Banasree', 'Bangla College', 'Bangla Motor', 'Bangladesh Bank', 'Baromi', 'Bashabo', 'Bashtola', 'Bashundhara', 'Bashundhara (300 Feet Gate)', 'Bata Signal', 'Beribadh', 'Beribadh Tin Rastar Moor', 'Bijoy Sarani', 'Birulia', 'Board Bazar', 'Bosila', 'Bot tola', 'Cantonment', 'Chairman Bari', 'Chalantika Moor', 'Chandra', 'Chankhar Pul', 'Chashara', 'Chiriyakhana', 'Chittagong Road', 'City College', 'CMH', 'College Gate', 'Dainik Bangla Moor', 'Darussalam', 'Dayaganj', 'Demra Staff Quarter', 'Dhaka College', 'Dhakeshwari', 'Dhamrai', 'Dhanmondi 15', 'Dhanmondi 27', 'Dhanmondi 32', 'Dholairpar', 'Dhour', 'Dhupkhola', 'Diabari', 'Duaripara', 'ECB Square', 'Eden College', 'Fakirapul', 'Fantasy Kingdom', 'Farmgate', 'Fulbaria', 'Gabtoli', 'Gandaria', 'Garrison (Cantonment)', 'Gazipur', 'Gazipur Bypass', 'Gazipur Chourasta', 'Ghatar Char', 'Golap Shah Mazar', 'Golapbag Chourasta', 'GPO', 'Gulistan', 'Gulshan 1', 'Gulshan 2', 'Gulshan Bridge', 'Hasnabad', 'Hazaribag', 'Hazipara', 'Hemayetpur', 'High Court', 'House Building', 'IDB', 'Ittefaq Moor', 'Jahangir Gate', 'Jakir Hossen Road', 'Jalkuri', 'Jamgora', 'Jamuna Future Park', 'Janapath Moor', 'Japan Garden City', 'Jarun', 'Jashimuddin', 'Jatrabari', 'Jigatola', 'Joydebpur', 'Jurain', 'Kachukhet', 'Kadamtali', 'Kakali', 'Kakrail', 'Kalabagan', 'Kalampur', 'Kallyanpur', 'Kalshi', 'Kamalapur', 'Kamarpara', 'Kamrangirchar', 'Kanchan Bridge', 'Kanchpur', 'Kashimpur', 'Katabon', 'Kawran Bazar', 'Kazipara', 'Kazla', 'Keraniganj', 'Khamar Bari', 'Khilgaon', 'Khilgaon Flyover', 'Khilgaon Khidma Hospital', 'Khilkhet', 'Khilkhet', 'Konabari', 'Kuchimura', 'Kuril', 'Kuril Bishwa Road', 'Kuril Chourasta', 'Link Road', 'Madanpur', 'Madhya Badda', 'Malibagh', 'Malibagh Moor', 'Malibagh Railgate', 'Manik Mia Avenue', 'Manik Nagar', 'Manikganj', 'Maowa', 'Matsya Bhaban', 'Matuail', 'Mazar Road', 'Meghnaghat', 'Merul', 'MES', 'Metro Hall', 'Mill Gate', 'Mirpur 1', 'Mirpur 10', 'Mirpur 11', 'Mirpur 12', 'Mirpur 13', 'Mirpur 14', 'Mirpur 14 Bus Stand', 'Mirpur 2', 'Mirpur 6', 'Mirpur DOHS', 'Mirpur Sony Cinema Hall', 'Mitford Ghat', 'Mogbazar', 'Mohakhali', 'Mohammadpur', 'Mohammadpur Bus Stand', 'Motijheel', 'Mouchak', 'Mugdapara', 'Nabisco', 'Nadda', 'Nandan Park', 'Narshinghapur', 'Nawabganj', 'Naya Bazar', 'New Market', 'Nila Market', 'Nilkhet', 'Nimtola', 'Nobinagar', 'Notre Dame College', 'Notun Bazar', 'Old Airport', 'Palashi', 'Pallabi', 'Palli Bidyut', 'Paltan', 'Panthapath', 'Paturia', 'Police Plaza', 'Postagola', 'Press Club', 'Proshika Moor', 'Purobi', 'Rainkhola', 'Rajarbag', 'Rajendrapur', 'Rajlakshmi', 'Rampura Bazar', 'Rampura Bridge', 'Ray Saheb Bazar', 'Rayer Bazar', 'Rayerbag', 'Ring Road', 'Rupnagar Abashik', 'Rupnagar Abashik', 'Sadarghat', 'Sainik Club', 'Salimullah Road', 'Sanarpar', 'Satrasta', 'Saudi Colony', 'Savar', 'Savar Cantonment', 'Sayedabad', 'Science Lab', 'Shahbag', 'Shahjadpur', 'Shanir Akhra', 'Shankar', 'Shantinagar', 'Shewra', 'Shewrapara', 'Shia Mosque', 'Shib Bari', 'Shibu Market', 'Shimultola', 'Shishu Mela', 'Shiyal Bari', 'Shonbari Sreenagar', 'Shonir Akhra', 'Showari Ghat', 'Shukrabad', 'Shyamoli', 'Sign Board', 'Signal', 'Sikder Medical College', 'Sony Cenema Hall', 'South Banasree', 'Sreepur', 'Staff Road', 'Star Kabab', 'Station Road', 'Sura Bari', 'Tajmahal Road', 'Taltola', 'Tarabo', 'Technical', 'Tikatuli', 'Tolarbag', 'Tongi', 'TT Para', 'Uttar Badda', 'Uttara', 'Vashantek', 'Victoria Park', 'Vulta', 'Wireless', 'Workshop', 'Zia Uddyan', 'Zirabo', 'Zirani Bazar', 'Airport'];
autocomplete(document.getElementById('search_from'), locations), autocomplete(document.getElementById('search_to'), locations);