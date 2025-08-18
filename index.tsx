
declare var L: any;

const translations = {
    en: {
        site_name: "WhereIs?",
        find_places_title: "Find Places Near You",
        select_province: "Select Province",
        select_county: "Select County",
        select_city_village: "Select City/Village",
        search_radius: "Search Radius",
        categories: "Categories",
        subcategories: "Subcategories",
        nearest: "Nearest",
        best: "Best",
        no_results: "No results found. Try expanding your search.",
        view_details: "View Details",
        getting_location: "Getting Location...",
        location_denied: "Location access denied. Please choose a location manually from the dropdowns or by clicking on the map.",
        location_unavailable: "Could not get your location. Please choose a location manually.",
        geolocation_not_supported: "Geolocation is not supported. Please choose a location manually.",
        location_not_found: "Could not find location for the selected city.",
        geocoding_error: "An error occurred while finding the location.",
        location_data_load_error: "Could not load location list. Please reload the page.",
        use_my_location: "Use My Current Location",
        next: "Next",
        back: "Back",
        search: "Search",
        new_search: "New Search",
        location_selection_title: "Step 1: Choose a Location",
        category_selection_title: "Step 2: Select a Category",
        results_title: "Step 3: Discover Places",
        map_view_placeholder: "Map will be shown here",
        location_map_instruction: "You can also click on the map to set a location.",
        location_from_gps: "Your current location.",
        location_from_map: "Location selected on map.",
        location_from_dropdown: "Location from city selection.",
        use_my_location_title: "Fastest Option",
        select_from_list_title: "Select from a List",
        select_from_map_title: "Select on the Map",
        sdk_load_error_title: "Error!",
        sdk_load_error_message: "Could not load the map service. Please check your internet connection and try reloading the page.",
        distance_away: "away",
        rating: "Rating",
        no_rating: "No rating available",
        navigate: "Navigate",
        confirm_location: "Confirm Location",
        navigate_with: "Navigate with...",
        navigate_neshan: "Neshan",
        navigate_google: "Google Maps",
        close: "Close",
        fastest_way_desc: "Automatically detect your position using GPS for a quick start.",
        select_from_list_desc: "Browse through provinces, counties, and cities to pinpoint a location.",
        pick_on_map_desc: "Click directly on the map to choose your exact point of interest.",
        login_title: "Login / Register",
        username: "Username",
        password: "Password",
        email: "Email Address",
        login: "Login",
        register: "Register",
        register_under_development: "This feature is under development.",

    },
    fa: {
        site_name: "کجاست؟",
        find_places_title: "مکان‌های نزدیک خود را پیدا کنید",
        select_province: "انتخاب استان",
        select_county: "انتخاب شهرستان",
        select_city_village: "انتخاب شهر/روستا",
        search_radius: "شعاع جستجو",
        categories: "دسته‌بندی‌ها",
        subcategories: "زیرمجموعه‌ها",
        nearest: "نزدیک‌ترین",
        best: "بهترین",
        no_results: "نتیجه‌ای یافت نشد. شعاع جستجو را افزایش دهید.",
        view_details: "مشاهده جزئیات",
        getting_location: "در حال دریافت موقعیت...",
        location_denied: "دسترسی به موقعیت مکانی رد شد. لطفاً یک مکان را به صورت دستی از منوها یا با کلیک روی نقشه انتخاب کنید.",
        location_unavailable: "موقعیت مکانی شما یافت نشد. لطفاً یک مکان را به صورت دستی انتخاب کنید.",
        geolocation_not_supported: "موقعیت‌یابی جغرافیایی پشتیبانی نمی‌شود. لطفاً یک مکان را به صورت دستی انتخاب کنید.",
        location_not_found: "موقعیت مکانی برای شهر انتخاب شده یافت نشد.",
        geocoding_error: "خطایی هنگام یافتن موقعیت مکانی رخ داد.",
        location_data_load_error: "لیست موقعیت‌ها بارگیری نشد. لطفاً صفحه را دوباره بارگیری کنید.",
        use_my_location: "استفاده از مکان فعلی من",
        next: "بعدی",
        back: "بازگشت",
        search: "جستجو",
        new_search: "جستجوی جدید",
        location_selection_title: "مرحله ۱: انتخاب مکان",
        category_selection_title: "مرحله ۲: انتخاب دسته‌بندی",
        results_title: "مرحله ۳: نتایج جستجو",
        map_view_placeholder: "نقشه اینجا نمایش داده می‌شود",
        location_map_instruction: "می‌توانید برای تعیین مکان روی نقشه کلیک کنید.",
        location_from_gps: "مکان فعلی شما.",
        location_from_map: "مکان انتخاب شده روی نقشه.",
        location_from_dropdown: "مکان انتخاب شده از لیست شهرها.",
        use_my_location_title: "سریع‌ترین راه",
        select_from_list_title: "انتخاب از لیست",
        select_from_map_title: "انتخاب از روی نقشه",
        sdk_load_error_title: "خطا!",
        sdk_load_error_message: "سرویس نقشه بارگیری نشد. لطفاً اتصال اینترنت خود را بررسی کرده و صفحه را دوباره بارگیری کنید.",
        distance_away: "فاصله",
        rating: "امتیاز",
        no_rating: "امتیاز ثبت نشده",
        navigate: "مسیریابی",
        confirm_location: "تایید مکان",
        navigate_with: "مسیریابی با...",
        navigate_neshan: "نشان",
        navigate_google: "گوگل مپ",
        close: "بستن",
        fastest_way_desc: "موقعیت خود را به صورت خودکار با GPS برای شروع سریع پیدا کنید.",
        select_from_list_desc: "برای مشخص کردن مکان، در میان استان‌ها، شهرستان‌ها و شهرها مرور کنید.",
        pick_on_map_desc: "برای انتخاب نقطه دقیق مورد نظر خود، مستقیماً روی نقشه کلیک کنید.",
        login_title: "ورود / ثبت نام",
        username: "نام کاربری",
        password: "رمز عبور",
        email: "آدرس ایمیل",
        login: "ورود",
        register: "ثبت نام",
        register_under_development: "این قابلیت در دست ساخت است.",
    },
    ar: {
        site_name: "أين هو؟",
        find_places_title: "ابحث عن أماكن بالقرب منك",
        select_province: "اختر المحافظة",
        select_county: "اختر المقاطعة",
        select_city_village: "اختر المدينة / القرية",
        search_radius: "نطاق البحث",
        categories: "الفئات",
        subcategories: "فئات فرعية",
        nearest: "الأقرب",
        best: "الأفضل",
        no_results: "لم يتم العثور على نتائج. حاول توسيع نطاق البحث.",
        view_details: "عرض التفاصيل",
        getting_location: "جاري الحصول على الموقع...",
        location_denied: "تم رفض الوصول إلى الموقع. يرجى اختيار موقع يدويًا من القوائم أو بالنقر على الخريطة.",
        location_unavailable: "تعذر الحصول على موقعك. يرجى اختيار موقع يدويًا.",
        geolocation_not_supported: "تحديد الموقع الجغرافي غير مدعوم. يرجى اختيار موقع يدويًا.",
        location_not_found: "تعذر العثور على موقع للمدينة المحددة.",
        geocoding_error: "حدث خطأ أثناء العثور على الموقع.",
        location_data_load_error: "تعذر تحميل قائمة المواقع. يرجى إعادة تحميل الصفحة.",
        use_my_location: "استخدام موقعي الحالي",
        next: "التالي",
        back: "رجوع",
        search: "بحث",
        new_search: "بحث جديد",
        location_selection_title: "الخطوة ١: اختر موقعًا",
        category_selection_title: "الخطوة ٢: اختر فئة",
        results_title: "الخطوة ٣: اكتشف الأماكن",
        map_view_placeholder: "سيتم عرض الخريطة هنا",
        location_map_instruction: "يمكنك أيضًا النقر على الخريطة لتعيين موقع.",
        location_from_gps: "موقعك الحالي.",
        location_from_map: "الموقع المحدد على الخريطة.",
        location_from_dropdown: "الموقع المحدد من قائمة المدن.",
        use_my_location_title: "الخيار الأسرع",
        select_from_list_title: "اختر من القائمة",
        select_from_map_title: "اختر على الخريطة",
        sdk_load_error_title: "خطأ!",
        sdk_load_error_message: "تعذر تحميل خدمة الخريطة. يرجى التحقق من اتصالك بالإنترنت ومحاولة إعادة تحميل الصفحة.",
        distance_away: "مسافة",
        rating: "تقييم",
        no_rating: "لا يوجد تقييم متاح",
        navigate: "اذهب",
        confirm_location: "تأكيد الموقع",
        navigate_with: "اذهب مع...",
        navigate_neshan: "نشان",
        navigate_google: "خرائط جوجل",
        close: "إغلاق",
        fastest_way_desc: "اكتشف موقعك تلقائيًا باستخدام GPS لبداية سريعة.",
        select_from_list_desc: "تصفح المحافظات والمقاطعات والمدن لتحديد موقع.",
        pick_on_map_desc: "انقر مباشرة على الخريطة لاختيار النقطة التي تهمك بالضبط.",
        login_title: "تسجيل الدخول / تسجيل",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        email: "عنوان البريد الإلكتروني",
        login: "تسجيل الدخول",
        register: "تسجيل",
        register_under_development: "هذه الميزة قيد التطوير.",
    },
};

const categoryIcons = {
    "خوراک و نوشیدنی": "fas fa-utensils",
    "خرید": "fas fa-shopping-bag",
    "اقامت": "fas fa-bed",
    "خدمات خودرو و حمل‌ونقل": "fas fa-car",
    "مالی و خدمات": "fas fa-piggy-bank",
    "بهداشت و درمان": "fas fa-briefcase-medical",
    "تفریح، ورزش و سرگرمی": "fas fa-futbol",
    "مذهبی و فرهنگی": "fas fa-landmark",
    "اداری و دولتی": "fas fa-building-columns",
    "restaurant": "fas fa-utensils",
    "fast_food_restaurant": "fas fa-hamburger",
    "cafe": "fas fa-coffee",
    "coffee_shop": "fas fa-mug-hot",
    "bakery": "fas fa-bread-slice",
    "dessert_shop": "fas fa-cookie-bite",
    "ice_cream_shop": "fas fa-ice-cream",
    "juice_shop": "fas fa-martini-glass-citrus",
    "bar": "fas fa-glass-cheers",
    "shopping_mall": "fas fa-store",
    "supermarket": "fas fa-shopping-cart",
    "grocery_or_supermarket": "fas fa-carrot",
    "clothing_store": "fas fa-tshirt",
    "electronics_store": "fas fa-plug",
    "book_store": "fas fa-book-open",
    "jewelry_store": "fas fa-gem",
    "mobile_store": "fas fa-mobile-alt",
    "store": "fas fa-store-alt",
    "hotel": "fas fa-concierge-bell",
    "motel": "fas fa-hotel",
    "lodging": "fas fa-house-user",
    "hostel": "fas fa-building",
    "campground": "fas fa-campground",
    "gas_station": "fas fa-gas-pump",
    "parking": "fas fa-parking",
    "car_repair": "fas fa-tools",
    "car_dealer": "fas fa-car-side",
    "car_wash": "fas fa-tint",
    "car_rental": "fas fa-car-alt",
    "bus_station": "fas fa-bus",
    "taxi_stand": "fas fa-taxi",
    "train_station": "fas fa-train",
    "subway_station": "fas fa-subway",
    "airport": "fas fa-plane-departure",
    "bank": "fas fa-university",
    "atm": "fas fa-credit-card",
    "currency_exchange": "fas fa-dollar-sign",
    "post_office": "fas fa-envelope",
    "insurance_agency": "fas fa-shield-alt",
    "travel_agency": "fas fa-suitcase-rolling",
    "hospital": "fas fa-hospital",
    "clinic": "fas fa-clinic-medical",
    "doctor": "fas fa-user-md",
    "dentist": "fas fa-tooth",
    "pharmacy": "fas fa-pills",
    "physiotherapist": "fas fa-running",
    "veterinary_care": "fas fa-paw",
    "park": "fas fa-tree",
    "water_park": "fas fa-swimmer",
    "amusement_park": "fas fa-ferris-wheel",
    "zoo": "fas fa-hippo",
    "aquarium": "fas fa-fish",
    "movie_theater": "fas fa-film",
    "bowling_alley": "fas fa-bowling-ball",
    "gym": "fas fa-dumbbell",
    "stadium": "fas fa-flag-checkered",
    "golf_course": "fas fa-golf-ball",
    "mosque": "fas fa-mosque",
    "church": "fas fa-church",
    "synagogue": "fas fa-synagogue",
    "hindu_temple": "fas fa-gopuram",
    "museum": "fas fa-landmark",
    "art_gallery": "fas fa-palette",
    "library": "fas fa-book",
    "city_hall": "fas fa-building",
    "courthouse": "fas fa-gavel",
    "police": "fas fa-user-shield",
    "local_government_office": "fas fa-landmark",
    "embassy": "fas fa-flag",
    "military_base": "fas fa-shield-halved",
    "fire_station": "fas fa-fire-extinguisher",
};


const initializeApplication = () => {
    // --- STATE ---
    let currentLang = 'en';
    let divisionsData: any = {};
    let placeCategories: any[] = [];
    let userLocation: { lat: number | null, lng: number | null } = { lat: null, lng: null };
    let locationMap: any = null;
    let resultsMap: any = null;
    let locationMarker: any = null;
    let resultMarkers: any[] = [];
    let isochroneLayer: any = null;
    let selectedSubCategories = new Set<string>();
    let currentResults: any[] = [];
    let originalResults: any[] = [];
    let currentSort: string = 'best';
    const NESHAN_WEB_API_KEY = "web.36ff66f5c7c54199843b838e079237f6";
    const NESHAN_SERVICE_API_KEY = "service.267bed159b794099b813606c16305664";
    const tehranCoords = { lat: 35.6892, lng: 51.3890 };

    // --- PAGE ELEMENTS ---
    const pageLocation = document.getElementById('page-location');
    const pageCategory = document.getElementById('page-category');
    const pageResults = document.getElementById('page-results');

    // --- UI ELEMENTS ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const provinceSelect = document.getElementById('province-select') as HTMLSelectElement;
    const countySelect = document.getElementById('county-select') as HTMLSelectElement;
    const cityVillageSelect = document.getElementById('city-village-select') as HTMLSelectElement;
    const confirmLocationBtn = document.getElementById('confirm-location-btn') as HTMLButtonElement;

    const locationDataError = document.getElementById('location-data-error');
    const useMyLocationBtn = document.getElementById('use-my-location-btn') as HTMLButtonElement;
    const locationStatus = document.getElementById('location-status');
    
    // Category Page Elements
    const mainCategoriesView = document.getElementById('main-categories-view');
    const subCategoriesView = document.getElementById('sub-categories-view');
    const backToMainCategoriesBtn = document.getElementById('back-to-main-categories-btn');

    // User/Login Modal Elements
    const userIconBtn = document.getElementById('user-icon-btn');
    const loginModal = document.getElementById('login-modal');
    const loginModalClose = document.getElementById('login-modal-close');
    const registerBtn = document.getElementById('register-btn');
    const registerMessage = document.getElementById('register-message');


    const radiusSlider = document.getElementById('radius-slider');
    const radiusValue = document.getElementById('radius-value');
    const sortingTabBtns = document.querySelectorAll('.sort-tab-btn');
    const resultsList = document.getElementById('results-list');
    const navModal = document.getElementById('nav-modal');
    const navModalClose = document.getElementById('nav-modal-close');
    const navNeshanLink = document.getElementById('nav-neshan-link') as HTMLAnchorElement;
    const navGoogleLink = document.getElementById('nav-google-link') as HTMLAnchorElement;

    // --- NAVIGATION BUTTONS ---
    const nextToCategoryBtn = document.getElementById('next-to-category-btn') as HTMLButtonElement;
    const backToLocationBtn = document.getElementById('back-to-location-btn');
    const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
    const backToCategoryBtn = document.getElementById('back-to-category-btn');
    const newSearchBtn = document.getElementById('new-search-btn');

    // --- PAGE MANAGEMENT ---
    const showPage = (pageToShow) => {
        [pageLocation, pageCategory, pageResults].forEach(page => {
            page?.classList.toggle('hidden', page !== pageToShow);
        });
    };
    
    // --- UI STATE MANAGEMENT ---
    const updateLocationUI = () => {
        const hasLocation = userLocation.lat !== null && userLocation.lng !== null;
        nextToCategoryBtn.disabled = !hasLocation;
        const citySelected = cityVillageSelect.value !== '';
        confirmLocationBtn.disabled = !citySelected;
    };
    
    const updateCategoryUI = () => {
        searchBtn.disabled = selectedSubCategories.size === 0;
    };

    const goToCategoryPage = () => {
        showPage(pageCategory);
        renderCategoryFilters();
        updateCategoryUI();
    };

    // --- LANGUAGE & TRANSLATION ---
    const switchLanguage = (lang) => {
        currentLang = lang;
        const isRTL = lang === 'fa' || lang === 'ar';
        document.documentElement.lang = lang;
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const htmlEl = el as HTMLElement;
            const key = htmlEl.dataset.translateKey;
            if (key && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        langButtons.forEach(btn => {
            const htmlBtn = btn as HTMLElement;
            htmlBtn.classList.toggle('bg-primary', htmlBtn.dataset.lang === lang);
            htmlBtn.classList.toggle('text-white', htmlBtn.dataset.lang === lang);
        });
        
        // Repopulate dropdowns with translated placeholders
        if (provinceSelect.value === '') provinceSelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_province']} --`;
        if (countySelect.value === '') countySelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_county']} --`;
        if (cityVillageSelect.value === '') cityVillageSelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_city_village']} --`;
        
        renderCategoryFilters();
    };

    // --- MAP FUNCTIONS ---
    const createMap = (mapId, center, zoom) => {
        const mapContainer = document.getElementById(mapId);
        if (mapContainer) {
             mapContainer.innerHTML = ''; // Always clear the container
             mapContainer.classList.remove('items-center', 'justify-center');
        }
        return new L.Map(mapId, {
            key: NESHAN_WEB_API_KEY,
            maptype: 'dreamy',
            poi: true,
            traffic: false,
            center: center,
            zoom: zoom
        });
    };

    const setLocationOnMap = (lat, lng, zoom, statusKey) => {
        userLocation = { lat, lng };
        if (!locationMap) {
            locationMap = createMap('location-map', [lat, lng], zoom);
            locationMap.on('click', (e) => {
                setLocationOnMap(e.latlng.lat, e.latlng.lng, locationMap.getZoom(), 'location_from_map');
            });
        } else {
            locationMap.flyTo([lat, lng], zoom);
        }
        
        if(locationMarker) locationMarker.setLatLng([lat, lng]);
        else {
             locationMarker = new L.Marker([lat, lng]).addTo(locationMap);
        }

        if (locationStatus) locationStatus.textContent = translations[currentLang][statusKey];
        updateLocationUI();
    };


    // --- PAGE 1: LOCATION LOGIC ---
    const getUserLocation = () => {
        if (useMyLocationBtn) {
            useMyLocationBtn.disabled = true;
            useMyLocationBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span class="ml-2">${translations[currentLang]['getting_location']}</span>`;
        }
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocationOnMap(latitude, longitude, 15, 'location_from_gps');
                    if (useMyLocationBtn) {
                        useMyLocationBtn.disabled = false;
                        useMyLocationBtn.innerHTML = `<i class="fas fa-location-arrow mr-2"></i> <span data-translate-key="use_my_location">${translations[currentLang]['use_my_location']}</span>`;
                    }
                },
                (error) => {
                    let userMessageKey = 'location_unavailable';
                    if (error.code === 1) userMessageKey = 'location_denied';
                    if (locationStatus) locationStatus.textContent = translations[currentLang][userMessageKey];
                    if (useMyLocationBtn) {
                        useMyLocationBtn.disabled = false;
                        useMyLocationBtn.innerHTML = `<i class="fas fa-location-arrow mr-2"></i> <span data-translate-key="use_my_location">${translations[currentLang]['use_my_location']}</span>`;
                    }
                }
            );
        } else {
            if (locationStatus) locationStatus.textContent = translations[currentLang]['geolocation_not_supported'];
        }
    };
    
    const resetDropdown = (selectEl: HTMLSelectElement, placeholderKey: string) => {
        selectEl.innerHTML = `<option value="">-- ${translations[currentLang][placeholderKey]} --</option>`;
        selectEl.disabled = true;
        selectEl.classList.add('bg-gray-200', 'cursor-not-allowed');
    };

    const populateDropdown = (selectEl: HTMLSelectElement, options: string[], placeholderKey: string) => {
        const currentValue = selectEl.value;
        selectEl.innerHTML = `<option value="">-- ${translations[currentLang][placeholderKey]} --</option>`;
        
        options.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option;
            optionEl.textContent = option;
            selectEl.appendChild(optionEl);
        });
        selectEl.disabled = false;
        selectEl.classList.remove('bg-gray-200', 'cursor-not-allowed');

        if (options.includes(currentValue)) {
            selectEl.value = currentValue;
        }
    };

    const handleConfirmLocation = async () => {
        const province = provinceSelect.value;
        const county = countySelect.value;
        const city = cityVillageSelect.value;
    
        if (!city || !province || !county) {
            userLocation = { lat: null, lng: null };
            updateLocationUI();
            return;
        }
    
        confirmLocationBtn.disabled = true;
        confirmLocationBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
    
        // Using the new V6 Geocoding API with a more specific address
        const address = `${province}, ${county}, ${city}`;
        const url = `https://api.neshan.org/v6/geocoding?address=${encodeURIComponent(address)}`;
        
        try {
            const response = await fetch(url, { headers: { 'Api-Key': NESHAN_SERVICE_API_KEY } });
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            const data = await response.json();
    
            // Handle the new response format from the Geocoding API
            if (data.status === 'OK' && data.location) {
                const { y: lat, x: lng } = data.location;
                setLocationOnMap(lat, lng, 13, 'location_from_dropdown');
                goToCategoryPage(); // Automatically proceed to the next step
            } else {
                if (locationStatus) locationStatus.textContent = translations[currentLang]['location_not_found'];
            }
        } catch (error) {
            console.error("Geocoding failed:", error);
            if (locationStatus) locationStatus.textContent = translations[currentLang]['geocoding_error'];
        } finally {
            confirmLocationBtn.innerHTML = `<i class="fas fa-check mr-2"></i> <span data-translate-key="confirm_location">${translations[currentLang]['confirm_location']}</span>`;
            updateLocationUI(); 
        }
    };

    const setupLocationDropdowns = () => {
        const provinces = Object.keys(divisionsData);
        populateDropdown(provinceSelect, provinces, 'select_province');
        
        provinceSelect.addEventListener('change', () => {
            const selected = provinceSelect.value;
            resetDropdown(countySelect, 'select_county');
            resetDropdown(cityVillageSelect, 'select_city_village');
            if (selected) {
                const counties = Object.keys(divisionsData[selected]);
                populateDropdown(countySelect, counties, 'select_county');
            }
            updateLocationUI();
        });

        countySelect.addEventListener('change', () => {
            const prov = provinceSelect.value;
            const county = countySelect.value;
            resetDropdown(cityVillageSelect, 'select_city_village');
            if (prov && county) {
                const citiesAndVillages = Object.values(divisionsData[prov][county]).flat() as string[];
                const uniqueCities = [...new Set(citiesAndVillages)];
                populateDropdown(cityVillageSelect, uniqueCities, 'select_city_village');
            }
            updateLocationUI();
        });

        cityVillageSelect.addEventListener('change', updateLocationUI);
        confirmLocationBtn.addEventListener('click', handleConfirmLocation);
    };

    // --- PAGE 2: CATEGORY LOGIC ---
    const renderCategoryFilters = () => {
        if (!mainCategoriesView || !subCategoriesView) return;

        // Render main categories
        mainCategoriesView.innerHTML = '';
        const mainGrid = document.createElement('div');
        mainGrid.className = 'category-grid';

        placeCategories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-icon-btn';
            button.dataset.categoryName = category.name;
            button.innerHTML = `
                <i class="${categoryIcons[category.name] || 'fas fa-question-circle'}"></i>
                <span>${category.name}</span>
            `;
            button.addEventListener('click', () => showSubCategoryView(category));
            mainGrid.appendChild(button);
        });
        mainCategoriesView.appendChild(mainGrid);
        showMainCategoryView(); // Ensure main view is shown by default
    };
    
    const showMainCategoryView = () => {
        mainCategoriesView?.classList.remove('hidden');
        subCategoriesView?.classList.add('hidden');
        backToMainCategoriesBtn?.classList.add('hidden');
    };

    const showSubCategoryView = (category) => {
        if (!mainCategoriesView || !subCategoriesView) return;
        mainCategoriesView.classList.add('hidden');
        subCategoriesView.classList.remove('hidden');
        backToMainCategoriesBtn?.classList.remove('hidden');
        subCategoriesView.innerHTML = '';

        const subGrid = document.createElement('div');
        subGrid.className = 'category-grid';

        category.items.forEach(sub => {
            const subKey = sub.en; // Use english key for consistency
            const subName = currentLang === 'en' ? sub.en : sub.fa;

            const button = document.createElement('button');
            button.className = 'category-icon-btn';
            button.dataset.subCategoryKey = subKey;
            button.innerHTML = `
                <i class="${categoryIcons[subKey] || 'fas fa-map-marker-alt'}"></i>
                <span>${subName}</span>
            `;
            if (selectedSubCategories.has(subKey)) {
                button.classList.add('selected');
            }

            button.addEventListener('click', () => {
                if (selectedSubCategories.has(subKey)) {
                    selectedSubCategories.delete(subKey);
                    button.classList.remove('selected');
                } else {
                    selectedSubCategories.add(subKey);
                    button.classList.add('selected');
                }
                updateCategoryUI();
            });
            subGrid.appendChild(button);
        });
        subCategoriesView.appendChild(subGrid);
    };

    
    // --- PAGE 3: RESULTS LOGIC ---
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Radius of the earth in km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    const renderRatingStars = (rating: number): string => {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star text-yellow-400"></i>';
        }
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star text-yellow-400"></i>';
        }
        return `<div class="flex items-center gap-1">${stars}</div>`;
    };

    const performSearch = async () => {
        if (!userLocation.lat || !userLocation.lng || selectedSubCategories.size === 0) return;
        
        searchBtn.disabled = true;
        searchBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span data-translate-key="search">${translations[currentLang]['search']}</span>`;
        
        const radius = (radiusSlider as HTMLInputElement).value;
        
        // Convert selected English terms to Persian for the API
        const getFaTerm = (enTerm: string): string => {
            for (const category of placeCategories) {
                const foundItem = category.items.find(item => item.en === enTerm);
                if (foundItem) return foundItem.fa;
            }
            return enTerm; // Fallback
        };
        const persianSearchTerms = Array.from(selectedSubCategories).map(getFaTerm);
        const searchTerm = persianSearchTerms.join(',');

        
        // Fetch Isochrone data first
        const isochroneUrl = `https://api.neshan.org/v1/isochrone?location=${userLocation.lat},${userLocation.lng}&polygons=true&distance=${radius}`;
        try {
            const isoResponse = await fetch(isochroneUrl, { headers: { 'Api-Key': NESHAN_SERVICE_API_KEY } });
            const isoData = await isoResponse.json();
            if (isoData && isoData.features && isoData.features.length > 0) {
                const coordinates = isoData.features[0].geometry.coordinates[0];
                const leafletCoords = coordinates.map(coord => [coord[1], coord[0]]); // Neshan [lng, lat] -> Leaflet [lat, lng]
                
                if (isochroneLayer) isochroneLayer.remove();

                if (resultsMap) {
                    isochroneLayer = L.polygon(leafletCoords, { color: '#3B82F6', weight: 2, opacity: 0.7, fillOpacity: 0.1 }).addTo(resultsMap);
                }
            }
        } catch (isoError) {
            console.error("Failed to fetch isochrone data:", isoError);
        }

        // Fetch search results
        const searchUrl = `https://api.neshan.org/v1/search?term=${encodeURIComponent(searchTerm)}&lat=${userLocation.lat}&lng=${userLocation.lng}&radius=${Number(radius) * 1000}`;
        try {
            const response = await fetch(searchUrl, { headers: { 'Api-Key': NESHAN_SERVICE_API_KEY }});
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            const data = await response.json();
            
            originalResults = (data.items || []).map(item => ({
                ...item,
                distance: calculateDistance(userLocation.lat!, userLocation.lng!, item.location.y, item.location.x),
                rating: (Math.random() * 4) + 1 // Neshan API doesn't provide ratings, so we generate a random one for demo.
            }));
            
            currentSort = 'best'; // Default to best
            initResultsPage();

        } catch (error) {
            console.error("Search failed:", error);
            if (resultsList) resultsList.innerHTML = `<p class="text-center text-red-500">${error.message}</p>`;
        } finally {
            searchBtn.disabled = false;
            searchBtn.innerHTML = `<i class="fas fa-search"></i> <span data-translate-key="search">${translations[currentLang]['search']}</span>`;
            updateCategoryUI();
        }
    };

    const sortResults = () => {
        if (currentSort === 'nearest') {
            currentResults = [...originalResults].sort((a, b) => a.distance - b.distance);
        } else { // 'best'
            currentResults = [...originalResults].sort((a, b) => b.rating - a.rating);
        }
    };

    const renderResults = () => {
        if (!resultsList) return;
        resultsList.innerHTML = '';
        sortResults();

        if (currentResults.length === 0) {
            resultsList.innerHTML = `<div class="text-center p-4"><p class="text-gray-600" data-translate-key="no_results">${translations[currentLang]['no_results']}</p></div>`;
            return;
        }

        resultMarkers.forEach(marker => marker.remove());
        resultMarkers = [];
        const bounds = L.latLngBounds();

        currentResults.forEach(item => {
            const { title, address, type, location, distance, rating } = item;
            const card = document.createElement('div');
            card.className = 'p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer flex flex-col gap-2';
            card.innerHTML = `
                <div>
                    <h4 class="font-bold text-dark">${title}</h4>
                    <p class="text-sm text-gray-500">${type}</p>
                    <p class="text-sm text-gray-500 mt-1">${address}</p>
                </div>
                <div class="flex justify-between items-center text-sm mt-2 pt-2 border-t">
                     <div class="flex items-center gap-2">
                        ${renderRatingStars(rating)}
                        <span class="text-gray-500 text-xs">(${rating.toFixed(1)})</span>
                    </div>
                     <div class="flex items-center gap-2">
                        <i class="fas fa-route text-blue-500"></i>
                        <span class="text-gray-600 font-semibold">${distance.toFixed(1)} km</span>
                    </div>
                    <button class="navigate-btn bg-secondary text-white px-3 py-1 rounded-md text-xs font-bold hover:bg-primary" data-lat="${location.y}" data-lng="${location.x}" data-title="${title}">${translations[currentLang]['navigate']}</button>
                </div>
            `;
            card.addEventListener('click', (e) => {
                if (!(e.target as HTMLElement).classList.contains('navigate-btn')) {
                    if (resultsMap && location) {
                        resultsMap.flyTo([location.y, location.x], 16);
                    }
                }
            });
            resultsList.appendChild(card);

            if (resultsMap && location) {
                const marker = new L.Marker([location.y, location.x]).addTo(resultsMap)
                    .bindPopup(`<b>${title}</b><br>${address}`);
                resultMarkers.push(marker);
                bounds.extend([location.y, location.x]);
            }
        });
        
        document.querySelectorAll('.navigate-btn').forEach(btn => btn.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement;
            const lat = target.dataset.lat;
            const lng = target.dataset.lng;
            
            navNeshanLink.href = `https://neshan.org/maps/places/${lat},${lng}`;
            navGoogleLink.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
            
            navModal?.classList.remove('hidden');
        }));

        if (resultsMap && resultMarkers.length > 0) {
            if (userLocation.lat && userLocation.lng) {
                 const userMarker = new L.Marker([userLocation.lat, userLocation.lng], {
                    icon: L.icon({
                        iconUrl: 'https://static.neshan.org/sdk/leaflet/1.4.0/images/marker-icon-2x-red.png',
                        shadowUrl: 'https://static.neshan.org/sdk/leaflet/1.4.0/images/marker-shadow.png',
                        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
                    })
                }).addTo(resultsMap).bindPopup("Your Location");
                resultMarkers.push(userMarker);
                bounds.extend([userLocation.lat, userLocation.lng]);
            }
            if(isochroneLayer) bounds.extend(isochroneLayer.getBounds());
            resultsMap.fitBounds(bounds, { padding: [50, 50] });
        }
    };
    
    const updateSortUI = () => {
        sortingTabBtns.forEach(btn => {
            const htmlBtn = btn as HTMLElement;
            const isSelected = htmlBtn.dataset.sort === currentSort;
            htmlBtn.classList.toggle('text-primary', isSelected);
            htmlBtn.classList.toggle('border-primary', isSelected);
            htmlBtn.classList.toggle('text-gray-500', !isSelected);
            htmlBtn.classList.toggle('border-transparent', !isSelected);
        });
    };

    const initResultsPage = () => {
        showPage(pageResults);
        if (!resultsMap && userLocation.lat && userLocation.lng) {
            resultsMap = createMap('results-map', [userLocation.lat, userLocation.lng], 13);
        }
        updateSortUI();
        renderResults();
    };

    // --- DATA LOADING ---
    const loadData = async () => {
        try {
            // Using fetch() with explicit relative paths `./` to ensure they resolve correctly
            // from the current path, which is more robust for deployment environments.
            const [divisionsResponse, categoriesResponse] = await Promise.all([
                fetch('./iran_full_divisions.json'),
                fetch('./Places.json')
            ]);

            if (!divisionsResponse.ok || !categoriesResponse.ok) {
                throw new Error('Network response was not ok for data files.');
            }
            
            const divisionsJson = await divisionsResponse.json();
            const categoriesJson = await categoriesResponse.json();
            
            divisionsData = divisionsJson;
            placeCategories = categoriesJson.categories;
            
            return true;
        } catch (error) {
            console.error("Failed to load initial data:", error);
            if(locationDataError) {
                locationDataError.textContent = translations[currentLang]['location_data_load_error'];
                locationDataError.classList.remove('hidden');
            }
            return false;
        }
    };


    // --- INITIALIZATION & EVENT LISTENERS ---
    const initApp = async () => {
        const dataLoaded = await loadData();
        if (!dataLoaded) return;

        // Language Buttons
        langButtons.forEach(btn => btn.addEventListener('click', (e) => switchLanguage((e.currentTarget as HTMLElement).dataset.lang || 'en')));

        // Location Page
        useMyLocationBtn?.addEventListener('click', getUserLocation);
        
        // Category Page
        backToMainCategoriesBtn?.addEventListener('click', showMainCategoryView);
        if (radiusSlider && radiusValue) {
            radiusSlider.addEventListener('input', (e) => {
                radiusValue.textContent = `${(e.target as HTMLInputElement).value} km`;
            });
        }
        
        // Results Page
        sortingTabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const newSort = (e.currentTarget as HTMLElement).dataset.sort;
                if(newSort && newSort !== currentSort) {
                    currentSort = newSort;
                    updateSortUI();
                    renderResults();
                }
            });
        });

        // Navigation
        nextToCategoryBtn?.addEventListener('click', goToCategoryPage);
        backToLocationBtn?.addEventListener('click', () => showPage(pageLocation));
        searchBtn?.addEventListener('click', performSearch);
        backToCategoryBtn?.addEventListener('click', () => showPage(pageCategory));
        newSearchBtn?.addEventListener('click', () => {
            userLocation = { lat: null, lng: null };
            selectedSubCategories.clear();
            currentResults = [];
            originalResults = [];
            if (isochroneLayer && resultsMap) { isochroneLayer.remove(); isochroneLayer = null; }
            
            if(locationStatus) locationStatus.textContent = '';
            
            showPage(pageLocation);
            resetDropdown(provinceSelect, 'select_province');
            resetDropdown(countySelect, 'select_county');
            resetDropdown(cityVillageSelect, 'select_city_village');
            setupLocationDropdowns();
            setLocationOnMap(tehranCoords.lat, tehranCoords.lng, 12, 'location_map_instruction');
            userLocation = { lat: null, lng: null };
            updateLocationUI();
        });

        // Modals
        navModalClose?.addEventListener('click', () => navModal?.classList.add('hidden'));
        userIconBtn?.addEventListener('click', () => loginModal?.classList.remove('hidden'));
        loginModalClose?.addEventListener('click', () => {
            loginModal?.classList.add('hidden');
            if(registerMessage) {
                registerMessage.classList.add('hidden');
                registerMessage.textContent = '';
            }
        });
        registerBtn?.addEventListener('click', () => {
            if(registerMessage){
                registerMessage.textContent = translations[currentLang]['register_under_development'];
                registerMessage.classList.remove('hidden');
            }
        });

        // Initial setup
        switchLanguage('fa');
        showPage(pageLocation);
        setupLocationDropdowns();
        setLocationOnMap(tehranCoords.lat, tehranCoords.lng, 12, 'location_map_instruction');
        userLocation = { lat: null, lng: null }; // Reset until user confirms
        updateLocationUI();
    };

    initApp();
};

document.addEventListener('DOMContentLoaded', () => {
    if (typeof L !== 'undefined' && L.Map) {
        initializeApplication();
    } else {
        document.body.innerHTML = `
            <div class="flex items-center justify-center h-screen bg-gray-100">
                <div class="bg-white p-8 rounded-lg shadow-md text-center">
                    <h1 class="text-2xl font-bold text-red-600" data-translate-key="sdk_load_error_title">Error!</h1>
                    <p class="text-gray-700" data-translate-key="sdk_load_error_message">Could not load the map service. Please check your internet connection and try reloading the page.</p>
                </div>
            </div>
        `;
    }
});