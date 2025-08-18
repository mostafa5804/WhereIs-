
declare var L: any;

const translations = {
    en: {
        site_name: "WhereIs?",
        find_places_title: "Find Places Near You",
        select_province: "Select Province",
        select_county: "Select County",
        select_city_village: "Select City/Village",
        categories: "Categories",
        subcategories: "Subcategories",
        nearest: "Nearest",
        no_results: "No results found in this area. Try a different search or location.",
        view_details: "View Details",
        getting_location: "Getting Location...",
        location_denied: "Location access denied. Please choose a location manually from the dropdowns or by clicking on the map.",
        location_unavailable: "Could not get your location. Please choose a location manually.",
        geolocation_not_supported: "Geolocation is not supported. Please choose a location manually.",
        location_not_found: "Could not find location for the selected city.",
        geocoding_error: "An error occurred while find the location.",
        search_error: "An error occurred during the search. Please try again.",
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
        quick_search_error: "Please select a location first.",
        open: "Open",
        closed: "Closed",
    },
    fa: {
        site_name: "کجاست؟",
        find_places_title: "مکان‌های نزدیک خود را پیدا کنید",
        select_province: "انتخاب استان",
        select_county: "انتخاب شهرستان",
        select_city_village: "انتخاب شهر/روستا",
        categories: "دسته‌بندی‌ها",
        subcategories: "زیرمجموعه‌ها",
        nearest: "نزدیک‌ترین",
        no_results: "نتیجه‌ای در این محدوده یافت نشد. جستجو یا مکان دیگری را امتحان کنید.",
        view_details: "مشاهده جزئیات",
        getting_location: "در حال دریافت موقعیت...",
        location_denied: "دسترسی به موقعیت مکانی رد شد. لطفاً یک مکان را به صورت دستی از منوها یا با کلیک روی نقشه انتخاب کنید.",
        location_unavailable: "موقعیت مکانی شما یافت نشد. لطفاً یک مکان را به صورت دستی انتخاب کنید.",
        geolocation_not_supported: "موقعیت‌یابی جغرافیایی پشتیبانی نمی‌شود. لطفاً یک مکان را به صورت دستی انتخاب کنید.",
        location_not_found: "موقعیت مکانی برای شهر انتخاب شده یافت نشد.",
        geocoding_error: "خطایی هنگام یافتن موقعیت مکانی رخ داد.",
        search_error: "خطایی در هنگام جستجو رخ داد. لطفا دوباره تلاش کنید.",
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
        quick_search_error: "لطفا ابتدا یک مکان را انتخاب کنید.",
        open: "باز",
        closed: "بسته",
    },
    ar: {
        site_name: "أين هو؟",
        find_places_title: "ابحث عن أماكن بالقرب منك",
        select_province: "اختر المحافظة",
        select_county: "اختر المقاطعة",
        select_city_village: "اختر المدينة / القرية",
        categories: "الفئات",
        subcategories: "فئات فرعية",
        nearest: "الأقرب",
        no_results: "لم يتم العثور على نتائج في هذه المنطقة. جرب بحثًا أو موقعًا مختلفًا.",
        view_details: "عرض التفاصيل",
        getting_location: "جاري الحصول على الموقع...",
        location_denied: "تم رفض الوصول إلى الموقع. يرجى اختيار موقع يدويًا من القوائم أو بالنقر على الخريطة.",
        location_unavailable: "تعذر الحصول على موقعك. يرجى اختيار موقع يدويًا.",
        geolocation_not_supported: "تحديد الموقع الجغرافي غير مدعوم. يرجى اختيار موقع يدويًا.",
        location_not_found: "تعذر العثور على موقع للمدينة المحددة.",
        geocoding_error: "حدث خطأ أثناء العثور على الموقع.",
        search_error: "حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.",
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
        quick_search_error: "يرجى تحديد موقع أولاً.",
        open: "مفتوح",
        closed: "مغلق",
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
    let isDarkMode = false;
    const NESHAN_WEB_API_KEY = "web.36ff66f5c7c54199843b838e079237f6";
    const NESHAN_SERVICE_API_KEY = "service.267bed159b794099b813606c16305664";
    const tehranCoords = { lat: 35.6892, lng: 51.3890 };

    // --- PAGE ELEMENTS ---
    const pageLocation = document.getElementById('page-location');
    const pageCategory = document.getElementById('page-category');
    const pageResults = document.getElementById('page-results');

    // --- UI ELEMENTS ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const siteNameBtn = document.getElementById('site-name-btn');
    const provinceSelect = document.getElementById('province-select') as HTMLSelectElement;
    const countySelect = document.getElementById('county-select') as HTMLSelectElement;
    const cityVillageSelect = document.getElementById('city-village-select') as HTMLSelectElement;
    const confirmLocationBtn = document.getElementById('confirm-location-btn') as HTMLButtonElement;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const quickSearchInput = document.getElementById('quick-search-input') as HTMLInputElement;
    const quickSearchError = document.getElementById('quick-search-error');

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


    const resultsList = document.getElementById('results-list');
    const navModal = document.getElementById('nav-modal');
    const navModalClose = document.getElementById('nav-modal-close');
    const navNeshanLink = document.getElementById('nav-neshan-link') as HTMLAnchorElement;
    const navGoogleLink = document.getElementById('nav-google-link') as HTMLAnchorElement;
    const detailsModal = document.getElementById('details-modal');
    const detailsModalContent = document.getElementById('details-modal-content');


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
        if (nextToCategoryBtn) {
            nextToCategoryBtn.disabled = !hasLocation;
        }
        const citySelected = cityVillageSelect && cityVillageSelect.value !== '';
        if (confirmLocationBtn) {
            confirmLocationBtn.disabled = !citySelected;
        }
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
            htmlBtn.classList.toggle('dark:bg-secondary', htmlBtn.dataset.lang === lang);
            htmlBtn.classList.toggle('text-white', htmlBtn.dataset.lang === lang);
        });
        
        if (provinceSelect.value === '') provinceSelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_province']} --`;
        if (countySelect.value === '') countySelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_county']} --`;
        if (cityVillageSelect.value === '') cityVillageSelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_city_village']} --`;
        
        renderCategoryFilters();
        if(pageResults && !pageResults.classList.contains('hidden')) {
            renderResults();
        }
    };

    // --- THEME ---
    const applyTheme = (theme: 'light' | 'dark') => {
        isDarkMode = theme === 'dark';
        document.documentElement.dataset.theme = theme;
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = `<i class="fas fa-${theme === 'dark' ? 'sun' : 'moon'}"></i>`;
        }
        localStorage.setItem('whereis-theme', theme);
        // Re-initialize maps if they exist to apply dark theme tiles
        if (locationMap) initializeLocationMap(true);
        if (resultsMap) initializeResultsMap(true);
    };

    const toggleTheme = () => {
        applyTheme(isDarkMode ? 'light' : 'dark');
    };

    // --- MAP FUNCTIONS ---
    const initializeLocationMap = (forceRecreate = false) => {
        if (locationMap && !forceRecreate) return;
        try {
            const mapElement = document.getElementById('location-map');
            if (mapElement) {
                if (locationMap) locationMap.remove();
                mapElement.innerHTML = '';
                 locationMap = new L.Map('location-map', {
                    key: NESHAN_WEB_API_KEY,
                    maptype: isDarkMode ? 'standard-night' : 'dreamy',
                    poi: true,
                    traffic: false,
                    center: [tehranCoords.lat, tehranCoords.lng],
                    zoom: 12
                });

                locationMap.on('click', (e) => {
                    userLocation = { lat: e.latlng.lat, lng: e.latlng.lng };
                    updateLocationMarker(userLocation.lat, userLocation.lng);
                    locationStatus.textContent = translations[currentLang]['location_from_map'];
                    updateLocationUI();
                });
            }
        } catch(e) {
            console.error("Map SDK Error: ", e);
             const mapElement = document.getElementById('location-map');
             if(mapElement) {
                mapElement.innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-lg">
                    <p class="font-bold" data-translate-key="sdk_load_error_title">${translations[currentLang]['sdk_load_error_title']}</p>
                    <p data-translate-key="sdk_load_error_message">${translations[currentLang]['sdk_load_error_message']}</p>
                </div>`;
            }
        }
    };
    
    const initializeResultsMap = (forceRecreate = false) => {
         if (resultsMap && !forceRecreate) return;
         try {
            const mapElement = document.getElementById('results-map');
            if(mapElement) {
                if(resultsMap) resultsMap.remove();
                mapElement.innerHTML = '';
                resultsMap = new L.Map('results-map', {
                    key: NESHAN_WEB_API_KEY,
                    maptype: isDarkMode ? 'standard-night' : 'dreamy',
                    poi: true,
                    traffic: false,
                    center: [userLocation.lat || tehranCoords.lat, userLocation.lng || tehranCoords.lng],
                    zoom: 13
                });
            }
        } catch(e) {
             console.error("Map SDK Error: ", e);
             const mapElement = document.getElementById('results-map');
             if(mapElement) {
                mapElement.innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-lg">
                    <p class="font-bold" data-translate-key="sdk_load_error_title">${translations[currentLang]['sdk_load_error_title']}</p>
                    <p data-translate-key="sdk_load_error_message">${translations[currentLang]['sdk_load_error_message']}</p>
                </div>`;
            }
        }
    };

    const updateLocationMarker = (lat, lng, zoom = 15) => {
        if (!locationMap) initializeLocationMap();
        if (locationMarker) {
            locationMarker.setLatLng([lat, lng]);
        } else {
            locationMarker = L.marker([lat, lng]).addTo(locationMap);
        }
        locationMap.flyTo([lat, lng], zoom);
    };

    const updateResultsMap = () => {
        if (!resultsMap) initializeResultsMap();
    
        resultMarkers.forEach(marker => resultsMap.removeLayer(marker));
        resultMarkers = [];
    
        if (isochroneLayer) resultsMap.removeLayer(isochroneLayer);
    
        const userMarkerIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const resultMarkerIcon = L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
    
        if (userLocation.lat && userLocation.lng) {
            L.marker([userLocation.lat, userLocation.lng], { icon: userMarkerIcon }).addTo(resultsMap)
                .bindPopup(translations[currentLang]['location_from_gps'])
                .openPopup();
        }
    
        const bounds = L.latLngBounds();
        if (userLocation.lat && userLocation.lng) {
            bounds.extend([userLocation.lat, userLocation.lng]);
        }
    
        const resultsToDisplay = currentResults;
    
        resultsToDisplay.forEach((result) => {
            const { location } = result;
            if (location) {
                const marker = L.marker([location.y, location.x], { icon: resultMarkerIcon }).addTo(resultsMap);
                const categoryName = getCategoryDisplayName(result.type);
                marker.bindPopup(`<b>${result.title}</b><br>${categoryName}`);
                resultMarkers.push(marker);
                bounds.extend([location.y, location.x]);
            }
        });
    
        if (bounds.isValid() && resultsToDisplay.length > 0) {
            resultsMap.fitBounds(bounds, { padding: [50, 50] });
        } else if (userLocation.lat && userLocation.lng) {
            resultsMap.setView([userLocation.lat, userLocation.lng], 13);
        }
    };

    const setStatus = (key, isError = false) => {
        if(!locationStatus) return;
        locationStatus.textContent = translations[currentLang][key];
        locationStatus.classList.toggle('text-red-500', isError);
        locationStatus.classList.toggle('text-gray-600', !isError);
        locationStatus.classList.toggle('dark:text-gray-400', !isError);
    };

    // --- LOCATION HANDLING ---
    const handleUseMyLocation = () => {
        if (!navigator.geolocation) {
            setStatus('geolocation_not_supported', true);
            return;
        }
        setStatus('getting_location');
        navigator.geolocation.getCurrentPosition(position => {
            userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
            updateLocationMarker(userLocation.lat, userLocation.lng);
            setStatus('location_from_gps');
            updateLocationUI();
        }, error => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setStatus('location_denied', true);
                    break;
                case error.POSITION_UNAVAILABLE:
                    setStatus('location_unavailable', true);
                    break;
                case error.TIMEOUT:
                    setStatus('location_unavailable', true);
                    break;
            }
            updateLocationUI();
        });
    };
    
    const geocodeCity = async (province, county, city) => {
        const address = `${province}, ${county}, ${city}`;
        setStatus('getting_location');
        try {
            const response = await fetch(`https://api.neshan.org/v1/geocoding?address=${encodeURIComponent(address)}`, {
                headers: { 'Api-Key': NESHAN_SERVICE_API_KEY }
            });
            const data = await response.json();
            if (data.status === 'OK' && data.location) {
                userLocation = { lat: data.location.y, lng: data.location.x };
                updateLocationMarker(userLocation.lat, userLocation.lng);
                setStatus('location_from_dropdown');
                updateLocationUI();
            } else {
                setStatus('location_not_found', true);
                userLocation = { lat: null, lng: null };
            }
        } catch (error) {
            setStatus('geocoding_error', true);
            userLocation = { lat: null, lng: null };
        }
        updateLocationUI();
    };

    const handleConfirmLocation = () => {
        const province = provinceSelect.options[provinceSelect.selectedIndex].text;
        const county = countySelect.options[countySelect.selectedIndex].text;
        const city = cityVillageSelect.value;
        if(city) {
            geocodeCity(province, county, city);
        }
    };

    // --- DATA LOADING & POPULATION ---
    const loadLocationData = async () => {
        try {
            const response = await fetch('iran_full_divisions.json');
            divisionsData = await response.json();
            populateProvinces();
        } catch (error) {
            console.error('Error loading location data:', error);
            if(locationDataError) {
                locationDataError.textContent = translations[currentLang]['location_data_load_error'];
                locationDataError.classList.remove('hidden');
            }
        }
    };
    
    const loadCategoryData = async () => {
        try {
            const response = await fetch('Places.json');
            const data = await response.json();
            placeCategories = data.categories;
        } catch (error) {
            console.error('Error loading category data:', error);
        }
    };

    const populateProvinces = () => {
        provinceSelect.innerHTML = `<option value="">-- ${translations[currentLang]['select_province']} --</option>`;
        Object.keys(divisionsData).forEach(province => {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });
        provinceSelect.disabled = false;
        provinceSelect.classList.remove('bg-gray-200', 'cursor-not-allowed');
    };

    const populateCounties = (province) => {
        countySelect.innerHTML = `<option value="">-- ${translations[currentLang]['select_county']} --</option>`;
        cityVillageSelect.innerHTML = `<option value="">-- ${translations[currentLang]['select_city_village']} --</option>`;
        cityVillageSelect.disabled = true;
        cityVillageSelect.classList.add('bg-gray-200', 'cursor-not-allowed');
        
        if (province && divisionsData[province]) {
            Object.keys(divisionsData[province]).forEach(county => {
                const option = document.createElement('option');
                option.value = county;
                option.textContent = county;
                countySelect.appendChild(option);
            });
            countySelect.disabled = false;
            countySelect.classList.remove('bg-gray-200', 'cursor-not-allowed');
        } else {
             countySelect.disabled = true;
             countySelect.classList.add('bg-gray-200', 'cursor-not-allowed');
        }
    };

    const populateCities = (province, county) => {
        cityVillageSelect.innerHTML = `<option value="">-- ${translations[currentLang]['select_city_village']} --</option>`;
        if (province && county && divisionsData[province]?.[county]) {
            const citiesAndVillages = new Set<string>();
            Object.values(divisionsData[province][county]).forEach((district: any) => {
                district.forEach(item => citiesAndVillages.add(item));
            });

            Array.from(citiesAndVillages).sort().forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityVillageSelect.appendChild(option);
            });
            cityVillageSelect.disabled = false;
            cityVillageSelect.classList.remove('bg-gray-200', 'cursor-not-allowed');
        } else {
            cityVillageSelect.disabled = true;
            cityVillageSelect.classList.add('bg-gray-200', 'cursor-not-allowed');
        }
    };

    // --- CATEGORY & SEARCH ---
    
    const getCategoryDisplayName = (type, lang = currentLang) => {
        for (const mainCategory of placeCategories) {
            for (const item of mainCategory.items) {
                if (item.en === type) {
                    return lang === 'fa' ? item.fa : item.en.replace(/_/g, ' ');
                }
            }
        }
        return type.replace(/_/g, ' ');
    };
    
    const renderCategoryFilters = (mainCategoryName: string | null = null) => {
        if (!mainCategoriesView || !subCategoriesView) return;
        if (!mainCategoryName) {
            mainCategoriesView.innerHTML = '';
            subCategoriesView.classList.add('hidden');
            mainCategoriesView.classList.remove('hidden');
            backToMainCategoriesBtn.classList.add('hidden');
            
            const grid = document.createElement('div');
            grid.className = 'category-grid';

            placeCategories.forEach(category => {
                const btn = document.createElement('button');
                btn.className = 'category-icon-btn';
                btn.dataset.category = category.name;
                
                const iconClass = categoryIcons[category.name] || 'fas fa-question-circle';
                const iconName = currentLang === 'fa' ? category.name : category.name;

                btn.innerHTML = `<i class="${iconClass}"></i><span>${iconName}</span>`;
                btn.onclick = () => renderCategoryFilters(category.name);
                grid.appendChild(btn);
            });
            mainCategoriesView.appendChild(grid);
        } else {
            mainCategoriesView.classList.add('hidden');
            subCategoriesView.classList.remove('hidden');
            subCategoriesView.innerHTML = '';
            backToMainCategoriesBtn.classList.remove('hidden');
            
            const category = placeCategories.find(c => c.name === mainCategoryName);
            if (category) {
                const grid = document.createElement('div');
                grid.className = 'category-grid';
                
                category.items.forEach(item => {
                    const btn = document.createElement('button');
                    btn.className = 'category-icon-btn';
                    btn.dataset.subcategoryEn = item.en;
                    btn.dataset.subcategoryFa = item.fa;

                    if (selectedSubCategories.has(item.en)) {
                        btn.classList.add('selected');
                    }
                    
                    const iconClass = categoryIcons[item.en] || 'fas fa-map-marker-alt';
                    const iconName = currentLang === 'fa' ? item.fa : item.en.replace(/_/g, ' ');
                    
                    btn.innerHTML = `<i class="${iconClass}"></i><span>${iconName}</span>`;
                    btn.onclick = () => {
                        btn.classList.toggle('selected');
                        if (selectedSubCategories.has(item.en)) {
                            selectedSubCategories.delete(item.en);
                        } else {
                            selectedSubCategories.add(item.en);
                        }
                        updateCategoryUI();
                    };
                    grid.appendChild(btn);
                });
                subCategoriesView.appendChild(grid);
            }
        }
    };
    
    const searchPlaces = async () => {
        showPage(pageResults);
        renderSkeletons();
        initializeResultsMap();
    
        const oldWarning = document.getElementById('search-warning');
        if (oldWarning) oldWarning.parentElement.removeChild(oldWarning);
    
        const lat = userLocation.lat;
        const lng = userLocation.lng;
    
        if (!lat || !lng) {
            if (resultsList) resultsList.innerHTML = `<div class="text-center p-4 text-red-500">${translations[currentLang]['quick_search_error']}</div>`;
            return;
        }
    
        const searchPromises = Array.from(selectedSubCategories).map(term => {
            const url = `https://api.neshan.org/v1/search?term=${term}&lat=${lat}&lng=${lng}`;
            return fetch(url, { headers: { 'Api-Key': NESHAN_SERVICE_API_KEY } }).then(async res => {
                if (!res.ok) {
                    let errorBody = 'Could not read error body.';
                    try { errorBody = await res.text(); } catch (e) {}
                    if (errorBody.trim().startsWith('<')) {
                        errorBody = "Received an HTML error page from the server."
                    }
                    throw new Error(`Neshan API error for term '${term}': ${errorBody.trim()}`);
                }
                const data = await res.json();
                if (typeof data.count === 'undefined' || typeof data.items === 'undefined') {
                    throw new Error(`Received an unexpected response format for term '${term}'.`);
                }
                return data;
            }).catch(networkError => {
                throw new Error(`Network error for term '${term}': ${networkError.message}`);
            });
        });
    
        const settledResults = await Promise.allSettled(searchPromises);
        
        const successfulResults = settledResults
            .filter(r => r.status === 'fulfilled')
            .map(r => (r as PromiseFulfilledResult<any>).value);

        const failedReasons = settledResults
            .filter(r => r.status === 'rejected')
            .map(r => (r as PromiseRejectedResult).reason);

        const combinedResults = successfulResults.flatMap(result => result.items || []);

        if (failedReasons.length > 0) {
            console.error("Some search requests failed:", failedReasons);

            const getErrorMessage = (reason: any): string => {
                if (reason instanceof Error) {
                    return reason.message;
                }
                if (typeof reason === 'object' && reason !== null) {
                    try {
                        const serialized = JSON.stringify(reason, Object.getOwnPropertyNames(reason));
                        if (serialized === '{}') return 'Empty error object received.';
                        return serialized;
                    } catch (e) {
                        return "Could not serialize circular error object.";
                    }
                }
                return String(reason);
            };

            if (combinedResults.length === 0) {
                const errorDetails = failedReasons.map(getErrorMessage).join('\n');
                if (resultsList) {
                    resultsList.innerHTML = `<div class="text-center p-4 text-red-500">${translations[currentLang]['search_error']}<br><pre class="text-xs text-left mt-2 whitespace-pre-wrap">${errorDetails}</pre></div>`;
                }
                currentResults = []; 
                updateResultsMap();
                return; 
            } else {
                if (resultsList && resultsList.parentElement) {
                     const errorContainer = document.createElement('div');
                     errorContainer.id = 'search-warning';
                     errorContainer.className = 'p-3 mb-4 bg-yellow-100 dark:bg-gray-700 text-yellow-800 dark:text-yellow-200 rounded-lg text-sm';
                     
                     const failedTerms = failedReasons.map(reason => {
                         const message = getErrorMessage(reason);
                         const match = message.match(/'(.*?)'/);
                         return match ? getCategoryDisplayName(match[1]) : 'Unknown category';
                     }).join(', ');

                     errorContainer.textContent = `Could not fetch results for: ${failedTerms}. Showing other results.`;
                     resultsList.parentElement.insertBefore(errorContainer, resultsList);
                }
            }
        }

        if (combinedResults.length === 0) {
             currentResults = [];
             originalResults = [];
             renderResults();
             return;
        }

        const uniqueResults = Array.from(new Map(combinedResults.map(item => [`${item.title}-${item.location.x}-${item.location.y}`, item])).values());
        
        const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
            const R = 6371e3; // metres
            const φ1 = lat1 * Math.PI/180;
            const φ2 = lat2 * Math.PI/180;
            const Δφ = (lat2-lat1) * Math.PI/180;
            const Δλ = (lon2-lon1) * Math.PI/180;

            const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                      Math.cos(φ1) * Math.cos(φ2) *
                      Math.sin(Δλ/2) * Math.sin(Δλ/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

            return R * c; // in metres
        };

        const resultsWithDistance = uniqueResults.map(r => ({
            ...r,
            distance: {
                value: calculateDistance(lat, lng, r.location.y, r.location.x),
                text: '' // Keep structure, though text is not used
            }
        }));
        
        const proximityLimitMeters = 25 * 1000; // 25km
        const resultsWithinProximity = resultsWithDistance.filter(r => r.distance.value <= proximityLimitMeters);

        if (resultsWithinProximity.length === 0) {
            currentResults = [];
            originalResults = [];
            renderResults();
            return;
        }

        originalResults = resultsWithinProximity.map(r => ({
            ...r,
            uid: `${r.location.y}-${r.location.x}`
        }));

        currentResults = [...originalResults];
        
        // Default and only sort is by nearest
        currentResults.sort((a, b) => a.distance.value - b.distance.value);

        renderResults();
    };
    
    const handleQuickSearch = () => {
        const term = quickSearchInput.value.trim();
        if (!term) return;

        if (userLocation.lat === null || userLocation.lng === null) {
            quickSearchError.textContent = translations[currentLang]['quick_search_error'];
            quickSearchError.classList.remove('hidden');
            setTimeout(() => quickSearchError.classList.add('hidden'), 3000);
            return;
        }

        selectedSubCategories.clear();
        selectedSubCategories.add(term);
        quickSearchInput.value = '';
        searchPlaces();
    };

    // --- RESULTS RENDERING & SORTING ---
    const renderSkeletons = () => {
        if (!resultsList) return;
        resultsList.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const skeletonCard = document.createElement('div');
            skeletonCard.className = 'bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border dark:border-gray-700 flex flex-col gap-2';
            skeletonCard.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="skeleton skeleton-icon"></div>
                    <div class="flex-grow space-y-2">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text-sm"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-2 pt-2 border-t dark:border-gray-700">
                    <div class="skeleton skeleton-text w-1/3"></div>
                    <div class="skeleton skeleton-button"></div>
                </div>
            `;
            resultsList.appendChild(skeletonCard);
        }
    }

    const renderResults = () => {
        if(!resultsList) return;
        resultsList.innerHTML = '';
        
        const resultsToDisplay = currentResults;

        if (resultsToDisplay.length === 0) {
            const oldWarning = document.getElementById('search-warning');
            if (!oldWarning) { // Don't show "no results" if there's already a partial error warning
               resultsList.innerHTML = `<div class="text-center p-4 text-gray-600 dark:text-gray-300">${translations[currentLang]['no_results']}</div>`;
            }
            updateResultsMap();
            return;
        }

        resultsToDisplay.forEach(result => {
            const card = document.createElement('div');
            card.className = 'result-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border dark:border-gray-700 flex flex-col gap-2';
            
            const distance = (result.distance.value / 1000).toFixed(1);
            const categoryName = getCategoryDisplayName(result.type);
            const iconClass = categoryIcons[result.type] || 'fas fa-map-marker-alt';
            
            card.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="bg-light dark:bg-gray-700 p-3 rounded-full flex-shrink-0">
                        <i class="${iconClass} text-primary dark:text-secondary text-xl"></i>
                    </div>
                    <div class="flex-grow min-w-0">
                         <h3 class="font-bold text-dark dark:text-white text-lg truncate">${result.title}</h3>
                        <p class="category-name-p text-sm text-gray-500 dark:text-gray-400">${categoryName}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 truncate">${result.address || ''}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-2 pt-2 border-t dark:border-gray-700">
                     <p class="text-sm font-semibold text-secondary">${distance} km ${translations[currentLang]['distance_away']}</p>
                     <div class="flex gap-2">
                        <button class="details-btn bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-dark dark:text-white font-bold py-2 px-3 rounded-lg transition-colors text-sm" data-uid="${result.uid}">
                            <i class="fas fa-eye mr-1"></i> ${translations[currentLang]['view_details']}
                        </button>
                        <button class="navigate-btn bg-secondary hover:bg-primary text-white font-bold py-2 px-3 rounded-lg transition-colors text-sm" data-lat="${result.location.y}" data-lng="${result.location.x}" data-title="${result.title}">
                            <i class="fas fa-route mr-1"></i> ${translations[currentLang]['navigate']}
                        </button>
                    </div>
                </div>
            `;
            resultsList.appendChild(card);
        });
        
        document.querySelectorAll('.navigate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget as HTMLElement;
                openNavModal(target.dataset.lat, target.dataset.lng, target.dataset.title);
            });
        });

        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                const uid = (e.currentTarget as HTMLElement).dataset.uid;
                const result = currentResults.find(r => r.uid === uid);
                if (result) openDetailsModal(result);
            });
        });

        updateResultsMap();
    };
    
    // --- MODALS ---
    const openNavModal = (lat, lng, title) => {
        const originLat = userLocation.lat;
        const originLng = userLocation.lng;
        const destLat = lat;
        const destLng = lng;

        if (originLat && originLng) {
            // Create web routing URLs if origin is known
            navNeshanLink.href = `https://neshan.org/maps/routing/car/origin/${originLat},${originLng}/destination/${destLat},${destLng}`;
            navGoogleLink.href = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${destLat},${destLng}`;
        } else {
            // Fallback to showing just the destination if origin is not available
            navNeshanLink.href = `https://neshan.org/maps?destination=${destLat},${destLng}`;
            navGoogleLink.href = `https://www.google.com/maps/search/?api=1&query=${destLat},${destLng}`;
        }
        
        navModal.classList.remove('hidden');
    };
    const closeNavModal = () => navModal.classList.add('hidden');

    const openLoginModal = () => loginModal.classList.remove('hidden');
    const closeLoginModal = () => {
        loginModal.classList.add('hidden');
        registerMessage.classList.add('hidden');
    }

    const openDetailsModal = (result) => {
        detailsModal.classList.remove('hidden');
        renderDetailsModalContent(result);
    };

    const renderDetailsModalContent = (result) => {
        const { title, address, type, location } = result;
        const categoryName = getCategoryDisplayName(type);

        detailsModalContent.innerHTML = `
            <button id="details-modal-close" class="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-20">&times;</button>
            <div class="overflow-y-auto">
                <div id="details-map" class="w-full h-64 bg-gray-200 dark:bg-gray-700"></div>
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-dark dark:text-white">${title}</h2>
                    <p class="text-md text-primary dark:text-secondary mb-3">${categoryName}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300"><i class="fas fa-map-marker-alt w-5"></i> ${address || 'آدرس نامشخص'}</p>
                </div>
            </div>
        `;
        document.getElementById('details-modal-close').addEventListener('click', closeDetailsModal);

        // Initialize the map inside the modal with a short delay to ensure the element is in the DOM
        setTimeout(() => {
            try {
                const detailMap = new L.Map('details-map', {
                    key: NESHAN_WEB_API_KEY,
                    maptype: isDarkMode ? 'standard-night' : 'dreamy',
                    poi: false,
                    traffic: false,
                    center: [location.y, location.x],
                    zoom: 15
                });
                L.marker([location.y, location.x]).addTo(detailMap);
            } catch (e) {
                console.error("Could not initialize detail map:", e);
                const mapEl = document.getElementById('details-map');
                if (mapEl) mapEl.innerHTML = `<div class="p-4 text-red-500 text-center">Could not load map.</div>`;
            }
        }, 100);
    };
    

    const closeDetailsModal = () => detailsModal.classList.add('hidden');

    // --- EVENT LISTENERS ---
    const setupEventListeners = () => {
        langButtons.forEach(btn => btn.addEventListener('click', (e) => switchLanguage((e.currentTarget as HTMLElement).dataset.lang)));
        siteNameBtn?.addEventListener('click', () => {
             showPage(pageLocation);
        });
        themeToggleBtn?.addEventListener('click', toggleTheme);
        quickSearchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleQuickSearch();
        });


        // Location Page
        useMyLocationBtn?.addEventListener('click', handleUseMyLocation);
        provinceSelect?.addEventListener('change', () => populateCounties(provinceSelect.value));
        countySelect?.addEventListener('change', () => populateCities(provinceSelect.value, countySelect.value));
        cityVillageSelect?.addEventListener('change', () => updateLocationUI());
        confirmLocationBtn?.addEventListener('click', handleConfirmLocation);
        nextToCategoryBtn?.addEventListener('click', goToCategoryPage);

        // Category Page
        backToLocationBtn?.addEventListener('click', () => showPage(pageLocation));
        searchBtn?.addEventListener('click', searchPlaces);
        
        backToMainCategoriesBtn?.addEventListener('click', () => renderCategoryFilters());

        // Results Page
        backToCategoryBtn?.addEventListener('click', () => showPage(pageCategory));
        newSearchBtn?.addEventListener('click', () => {
             userLocation = { lat: null, lng: null };
             selectedSubCategories.clear();
             if(locationMarker && locationMap) locationMap.removeLayer(locationMarker);
             locationMarker = null;
             if (locationStatus) locationStatus.textContent = '';
             if (provinceSelect) {
                provinceSelect.value = '';
                populateCounties('');
             }
             updateLocationUI();
             showPage(pageLocation);
        });
        
        // Modals
        navModalClose?.addEventListener('click', closeNavModal);
        userIconBtn?.addEventListener('click', openLoginModal);
        loginModalClose?.addEventListener('click', closeLoginModal);
        registerBtn?.addEventListener('click', () => {
            if(registerMessage){
                registerMessage.textContent = translations[currentLang]['register_under_development'];
                registerMessage.classList.remove('hidden');
            }
        });

        [navModal, loginModal, detailsModal].forEach(modal => {
            modal?.addEventListener('click', (e) => {
                if(e.target === modal) {
                    modal.classList.add('hidden');
                    if (modal === loginModal && registerMessage) registerMessage.classList.add('hidden');
                }
            });
        });
    };

    // --- INITIALIZATION ---
    const init = async () => {
        const savedTheme = localStorage.getItem('whereis-theme') as 'light' | 'dark' || 'light';
        applyTheme(savedTheme);

        showPage(pageLocation);
        switchLanguage('fa');
        await loadLocationData();
        await loadCategoryData();
        setupEventListeners();
        initializeLocationMap();
        updateLocationUI();
        updateCategoryUI();
    };

    init();
};

initializeApplication();