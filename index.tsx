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
        best: "Best",
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
        directions: "Directions",
        call: "Call",
        share: "Share",
        save: "Save",
        votes: "votes",
        phone_not_available: "Phone number not available",
        search_placeholder: "Search for places (e.g., cafe, park)...",
        or_divider: "OR",
        about_us: "About Us",
        faq: "FAQ",
        about_us_text: "Made by Mustafa with the help of AI ❤️",
        faq_q1: "How do I select a location?",
        faq_a1: "You have three options on the first page: use your device's GPS for your current location, click anywhere on the interactive map, or select your province, county, and city from the dropdown lists.",
        faq_q2: "Is this service free to use?",
        faq_a2: "Yes, WhereIs? is completely free for all users.",
        faq_q3: "What map service do you use?",
        faq_a3: "This application is powered by the Neshan Maps API for all location, mapping, and search functionalities.",
        no_images_available: "No images available for this location.",
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
        best: "بهترین",
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
        directions: "مسیرها",
        call: "تماس",
        share: "اشتراک‌گذاری",
        save: "ذخیره",
        votes: "رأی",
        phone_not_available: "شماره تلفن موجود نیست",
        search_placeholder: "جستجوی مکان‌ها (مثلاً کافه، پارک)...",
        or_divider: "یا",
        about_us: "درباره ما",
        faq: "سوالات متداول",
        about_us_text: "ساخته شده توسط مصطفی با کمک هوش مصنوعی ❤️",
        faq_q1: "چگونه یک مکان را انتخاب کنم؟",
        faq_a1: "شما سه گزینه در صفحه اول دارید: از GPS دستگاه خود برای مکان فعلی استفاده کنید، روی هر نقطه از نقشه تعاملی کلیک کنید، یا استان، شهرستان و شهر خود را از لیست‌های کشویی انتخاب کنید.",
        faq_q2: "آیا این سرویس رایگان است؟",
        faq_a2: "بله، استفاده از کجاست؟ برای همه کاربران کاملاً رایگان است.",
        faq_q3: "از چه سرویس نقشه‌ای استفاده می‌کنید؟",
        faq_a3: "این برنامه برای تمام قابلیت‌های مکانی، نقشه‌برداری و جستجو از API نقشه نشان استفاده می‌کند.",
        no_images_available: "تصویری برای این مکان موجود نیست.",
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
        best: "الأفضل",
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
        directions: "الاتجاهات",
        call: "اتصال",
        share: "مشاركة",
        save: "حفظ",
        votes: "صوت",
        phone_not_available: "رقم الهاتف غير متوفر",
        search_placeholder: "ابحث عن أماكن (مثل مقهى، حديقة)...",
        or_divider: "أو",
        about_us: "معلومات عنا",
        faq: "الأسئلة الشائعة",
        about_us_text: "صنع بواسطة مصطفى بمساعدة الذكاء الاصطناعي ❤️",
        faq_q1: "كيف أختار موقعًا؟",
        faq_a1: "لديك ثلاثة خيارات في الصفحة الأولى: استخدم GPS جهازك لموقعك الحالي، انقر في أي مكان على الخريطة التفاعلية، أو اختر محافظتك، مقاطعتك، ومدينتك من القوائم المنسدلة.",
        faq_q2: "هل هذه الخدمة مجانية؟",
        faq_a2: "نعم، أين هو؟ مجاني تمامًا لجميع المستخدمين.",
        faq_q3: "ما هي خدمة الخرائط التي تستخدمونها؟",
        faq_a3: "هذا التطبيق مدعوم بواجهة برمجة تطبيقات خرائط نشان لجميع وظائف الموقع ورسم الخرائط والبحث.",
        no_images_available: "لا توجد صور متاحة لهذا الموقع.",
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


const initializeApplication = async () => {
    // --- STATE ---
    let currentLang = 'fa';
    let divisionsData: any;
    let placeCategories: any[];
    let userLocation: { lat: number | null, lng: number | null } = { lat: null, lng: null };
    let locationMap: any = null;
    let resultsMap: any = null;
    let locationMarker: any = null;
    let resultMarkersMap = new Map<string, any>();
    let highlightedMarkerInfo: { marker: any; originalIcon: any } | null = null;
    let isochroneLayer: any = null;
    let selectedSubCategories = new Set<string>();
    let currentResults: any[] = [];
    let originalResults: any[] = [];
    let isDarkMode = false;
    let activeSortTab: 'nearest' | 'best' = 'nearest';
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
    const languageDropdownToggle = document.getElementById('language-dropdown-toggle');
    const languageDropdownMenu = document.getElementById('language-dropdown-menu');
    const currentLangFlag = document.getElementById('current-lang-flag');

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

    // Results Page Sort Tabs
    const sortNearestBtn = document.getElementById('sort-nearest-btn');
    const sortBestBtn = document.getElementById('sort-best-btn');


    // --- NAVIGATION BUTTONS ---
    const nextToCategoryBtn = document.getElementById('next-to-category-btn') as HTMLButtonElement;
    const backToLocationBtn = document.getElementById('back-to-location-btn');
    const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
    const backToCategoryBtn = document.getElementById('back-to-category-btn');
    const newSearchBtn = document.getElementById('new-search-btn');
    
    // --- FOOTER & NEW MODALS ---
    const aboutUsBtn = document.getElementById('about-us-btn');
    const aboutModal = document.getElementById('about-modal');
    const aboutModalClose = document.getElementById('about-modal-close');
    const faqBtn = document.getElementById('faq-btn');
    const faqModal = document.getElementById('faq-modal');
    const faqModalClose = document.getElementById('faq-modal-close');
    const faqAccordion = document.getElementById('faq-accordion');
    const imageGalleryModal = document.getElementById('image-gallery-modal');
    const galleryModalClose = document.getElementById('gallery-modal-close');
    const galleryContent = document.getElementById('gallery-content');

    // --- DATA LOADING ---
    try {
        const [divisionsResponse, categoriesResponse] = await Promise.all([
            fetch('/iran_full_divisions.json'),
            fetch('/Places.json')
        ]);
        if (!divisionsResponse.ok) throw new Error(`Failed to load iran_full_divisions.json: ${divisionsResponse.statusText}`);
        if (!categoriesResponse.ok) throw new Error(`Failed to load Places.json: ${categoriesResponse.statusText}`);

        divisionsData = await divisionsResponse.json();
        const placeCategoriesData = await categoriesResponse.json();
        placeCategories = placeCategoriesData.categories;
    } catch (error) {
        console.error("Data loading error:", error);
        if (locationDataError) {
            locationDataError.textContent = translations[currentLang]['location_data_load_error'];
            locationDataError.classList.remove('hidden');
        }
        // Disable dropdowns since data is not available
        provinceSelect.disabled = true;
        countySelect.disabled = true;
        cityVillageSelect.disabled = true;
        provinceSelect.classList.add('bg-gray-200', 'cursor-not-allowed');
        countySelect.classList.add('bg-gray-200', 'cursor-not-allowed');
        cityVillageSelect.classList.add('bg-gray-200', 'cursor-not-allowed');
        return; // Stop execution
    }

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
        searchBtn.disabled = selectedSubCategories.size === 0 && quickSearchInput.value.trim() === '';
    };

    const goToCategoryPage = () => {
        showPage(pageCategory);
        renderCategoryFilters();
        updateCategoryUI();
    };

    // --- LANGUAGE & TRANSLATION ---
    const langFlags = {
        fa: '🇮🇷',
        en: '🇬🇧',
        ar: '🇸🇦'
    };
    const switchLanguage = (lang) => {
        currentLang = lang;
        const isRTL = lang === 'fa' || lang === 'ar';
        document.documentElement.lang = lang;
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

        if (currentLangFlag) {
            currentLangFlag.textContent = langFlags[lang];
        }

        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const htmlEl = el as HTMLElement;
            const key = htmlEl.dataset.translateKey;
            if (key && translations[lang][key]) {
                const translation = translations[lang][key];
                if (htmlEl.hasAttribute('placeholder')) {
                    (htmlEl as HTMLInputElement).placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        if (provinceSelect.value === '') provinceSelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_province']} --`;
        if (countySelect.value === '') countySelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_county']} --`;
        if (cityVillageSelect.value === '') cityVillageSelect.firstElementChild.textContent = `-- ${translations[currentLang]['select_city_village']} --`;
        
        renderCategoryFilters();
        if(pageResults && !pageResults.classList.contains('hidden')) {
            sortAndRenderResults();
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
    
    const highlightResultOnMap = (uid: string) => {
        const markerToHighlight = resultMarkersMap.get(uid);
        const result = currentResults.find(r => r.uid === uid);

        if (!markerToHighlight || !result) return;
        
        // Reset previously highlighted marker
        if (highlightedMarkerInfo) {
            highlightedMarkerInfo.marker.setIcon(highlightedMarkerInfo.originalIcon);
        }

        const highlightedIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        
        // Highlight the new one
        highlightedMarkerInfo = {
            marker: markerToHighlight,
            originalIcon: markerToHighlight.options.icon
        };
        markerToHighlight.setIcon(highlightedIcon);
        markerToHighlight.setZIndexOffset(1000).openPopup();

        resultsMap.flyTo([result.location.y, result.location.x], 16);
    };

    const updateResultsMap = () => {
        if (!resultsMap) initializeResultsMap();
    
        // Clear previous markers from map and state
        resultMarkersMap.forEach(marker => resultsMap.removeLayer(marker));
        resultMarkersMap.clear();
        highlightedMarkerInfo = null;

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
            const { location, uid } = result;
            if (location) {
                const marker = L.marker([location.y, location.x], { icon: resultMarkerIcon }).addTo(resultsMap);
                const categoryName = getCategoryDisplayName(result.type);
                marker.bindPopup(`<b>${result.title}</b><br>${categoryName}`);
                resultMarkersMap.set(uid, marker);
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

        const searchTerms = new Set(selectedSubCategories);
        const quickSearchTerm = quickSearchInput.value.trim();
        if(quickSearchTerm) {
            searchTerms.add(quickSearchTerm);
        }
    
        const oldWarning = document.getElementById('search-warning');
        if (oldWarning) oldWarning.parentElement.removeChild(oldWarning);
    
        const lat = userLocation.lat;
        const lng = userLocation.lng;
    
        if (!lat || !lng) {
            if (resultsList) resultsList.innerHTML = `<div class="text-center p-4 text-red-500">${translations[currentLang]['quick_search_error']}</div>`;
            return;
        }
    
        const searchPromises = Array.from(searchTerms).map(term => {
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
             sortAndRenderResults();
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
            sortAndRenderResults();
            return;
        }

        originalResults = resultsWithinProximity.map(r => {
            return {
                ...r,
                uid: `${r.title}-${r.location.y}-${r.location.x}`
            };
        });
        
        sortAndRenderResults();
    };
    
    const handleQuickSearch = () => {
        const term = quickSearchInput.value.trim();
        if (!term && selectedSubCategories.size === 0) return;

        if (userLocation.lat === null || userLocation.lng === null) {
            quickSearchError.textContent = translations[currentLang]['quick_search_error'];
            quickSearchError.classList.remove('hidden');
            setTimeout(() => quickSearchError.classList.add('hidden'), 3000);
            return;
        }
        searchPlaces();
    };

    // --- RESULTS RENDERING & SORTING ---
    const sortAndRenderResults = () => {
        currentResults = [...originalResults];

        if (activeSortTab === 'nearest') {
            currentResults.sort((a, b) => a.distance.value - b.distance.value);
        } else { // 'best'
            currentResults.sort((a, b) => b.votes - a.votes);
        }
        
        // Update tab UI
        if(sortNearestBtn && sortBestBtn) {
            sortNearestBtn.classList.toggle('active', activeSortTab === 'nearest');
            sortBestBtn.classList.toggle('active', activeSortTab === 'best');
        }

        renderResults();
    };

    const renderSkeletons = () => {
        if (!resultsList) return;
        resultsList.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const skeletonCard = document.createElement('div');
            skeletonCard.className = 'bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border dark:border-gray-700 flex flex-col gap-3';
            skeletonCard.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="skeleton skeleton-icon"></div>
                    <div class="flex-grow space-y-3">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-text w-3/4"></div>
                        <div class="skeleton skeleton-text-sm w-1/2"></div>
                    </div>
                </div>
                <div class="skeleton skeleton-text"></div>
                <div class="mt-auto pt-3 border-t dark:border-gray-700 flex justify-around">
                    <div class="skeleton skeleton-button w-16 h-10"></div>
                    <div class="skeleton skeleton-button w-16 h-10"></div>
                    <div class="skeleton skeleton-button w-16 h-10"></div>
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
            card.className = 'result-card bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700 flex flex-col relative transition-all duration-200 hover:shadow-xl hover:-translate-y-1';
            card.dataset.uid = result.uid;

            const distance = (result.distance.value / 1000).toFixed(1);
            const categoryName = getCategoryDisplayName(result.type);
            const iconClass = categoryIcons[result.type] || 'fas fa-map-marker-alt';
            
            card.innerHTML = `
                <div class="result-card-image-container">
                    <i class="${iconClass} icon-fallback"></i>
                </div>
                <!-- Main Content Area -->
                <div class="p-4 flex-grow cursor-pointer" data-action="highlight">
                    <div class="flex items-start gap-3">
                        <div class="bg-light dark:bg-gray-700 p-3 rounded-full flex-shrink-0">
                            <i class="${iconClass} text-primary dark:text-secondary text-xl"></i>
                        </div>
                        <div class="flex-grow">
                            <h3 class="font-bold text-dark dark:text-white text-lg truncate">${result.title}</h3>
                             <div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <p>${categoryName}</p>
                                <p>${distance} km ${translations[currentLang]['distance_away']}</p>
                            </div>
                        </div>
                    </div>

                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-3 truncate">${result.address || ''}</p>
                </div>

                <!-- Action Bar -->
                <div class="action-bar-container mt-auto p-2 border-t dark:border-gray-700 flex justify-around items-center">
                    <button class="action-bar-btn navigate-btn" data-lat="${result.location.y}" data-lng="${result.location.x}" data-title="${result.title}">
                        <i class="fas fa-route"></i>
                        <span data-translate-key="directions">${translations[currentLang]['directions']}</span>
                    </button>
                     <div class="action-bar-btn" title="${result.votes} ${translations[currentLang]['votes']}">
                        <i class="fas fa-star text-accent"></i>
                        <span>${result.votes}</span>
                    </div>
                    <button class="action-bar-btn share-btn">
                        <i class="fas fa-share-alt"></i>
                        <span data-translate-key="share">${translations[currentLang]['share']}</span>
                    </button>
                </div>
            `;
            resultsList.appendChild(card);
            
            card.querySelector('[data-action="highlight"]').addEventListener('click', (e) => {
                const uid = (e.currentTarget as HTMLElement).closest<HTMLElement>('.result-card')?.dataset.uid;
                if(uid) highlightResultOnMap(uid);
            });

            card.querySelector('.result-card-image-container').addEventListener('click', () => {
                if (galleryContent) {
                    galleryContent.innerHTML = `<p class="text-gray-600 dark:text-gray-300" data-translate-key="no_images_available">${translations[currentLang]['no_images_available']}</p>`;
                }
                imageGalleryModal?.classList.remove('hidden');
            });

            card.querySelector('.navigate-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                const target = e.currentTarget as HTMLElement;
                openNavModal(target.dataset.lat, target.dataset.lng, target.dataset.title);
            });
            
             card.querySelector('.share-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                if (result) {
                    const shareUrl = `https://neshan.org/maps?destination=${result.location.y},${result.location.x}`;
                    const shareText = `Check out ${result.title} on Neshan Maps!`;
                     if (navigator.share) {
                        navigator.share({
                            title: result.title,
                            text: shareText,
                            url: shareUrl,
                        }).catch(console.error);
                    } else {
                        // Fallback for browsers that don't support the Share API
                        navigator.clipboard.writeText(shareUrl).then(() => {
                            alert(`Link copied to clipboard: ${shareUrl}`);
                        }).catch(err => {
                             alert(`Could not copy link. Here it is: ${shareUrl}`);
                        });
                    }
                }
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

    // --- EVENT LISTENERS ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            if (lang) {
                switchLanguage(lang);
                if (languageDropdownMenu) languageDropdownMenu.classList.add('hidden');
            }
        });
    });

    languageDropdownToggle?.addEventListener('click', () => languageDropdownMenu?.classList.toggle('hidden'));
    themeToggleBtn?.addEventListener('click', toggleTheme);
    siteNameBtn?.addEventListener('click', () => showPage(pageLocation));
    nextToCategoryBtn?.addEventListener('click', goToCategoryPage);
    backToLocationBtn?.addEventListener('click', () => showPage(pageLocation));
    searchBtn?.addEventListener('click', handleQuickSearch);
    backToCategoryBtn?.addEventListener('click', () => showPage(pageCategory));
    newSearchBtn?.addEventListener('click', () => {
        userLocation = { lat: null, lng: null };
        selectedSubCategories.clear();
        quickSearchInput.value = '';
        if (locationStatus) locationStatus.textContent = '';
        if (locationMarker && locationMap) locationMap.removeLayer(locationMarker);
        locationMarker = null;
        provinceSelect.value = '';
        populateCounties('');
        showPage(pageLocation);
        updateLocationUI();
    });

    useMyLocationBtn?.addEventListener('click', handleUseMyLocation);
    provinceSelect?.addEventListener('change', () => populateCounties(provinceSelect.value));
    countySelect?.addEventListener('change', () => populateCities(provinceSelect.value, countySelect.value));
    cityVillageSelect?.addEventListener('change', () => {
        updateLocationUI();
        if (cityVillageSelect.value) {
            handleConfirmLocation();
        }
    });
    confirmLocationBtn?.addEventListener('click', handleConfirmLocation);
    quickSearchInput?.addEventListener('input', updateCategoryUI);
    quickSearchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !searchBtn.disabled) {
            e.preventDefault();
            handleQuickSearch();
        }
    });
    backToMainCategoriesBtn?.addEventListener('click', () => renderCategoryFilters(null));
    sortNearestBtn?.addEventListener('click', () => {
        if (activeSortTab !== 'nearest') {
            activeSortTab = 'nearest';
            sortAndRenderResults();
        }
    });
    sortBestBtn?.addEventListener('click', () => {
        if (activeSortTab !== 'best') {
            activeSortTab = 'best';
            sortAndRenderResults();
        }
    });

    navModalClose?.addEventListener('click', () => navModal?.classList.add('hidden'));
    userIconBtn?.addEventListener('click', () => loginModal?.classList.remove('hidden'));
    loginModalClose?.addEventListener('click', () => loginModal?.classList.add('hidden'));
    registerBtn?.addEventListener('click', () => {
        if (registerMessage) {
            registerMessage.classList.remove('hidden');
            setTimeout(() => registerMessage.classList.add('hidden'), 3000);
        }
    });

    // New Listeners for Footer and Modals
    galleryModalClose?.addEventListener('click', () => imageGalleryModal?.classList.add('hidden'));
    aboutUsBtn?.addEventListener('click', () => aboutModal?.classList.remove('hidden'));
    aboutModalClose?.addEventListener('click', () => aboutModal?.classList.add('hidden'));
    faqBtn?.addEventListener('click', () => faqModal?.classList.remove('hidden'));
    faqModalClose?.addEventListener('click', () => faqModal?.classList.add('hidden'));
    
    faqAccordion?.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            answer?.classList.toggle('hidden');
            icon?.classList.toggle('rotated');
        });
    });

    document.addEventListener('click', (event) => {
        if (languageDropdownToggle && !languageDropdownToggle.contains(event.target as Node) &&
            languageDropdownMenu && !languageDropdownMenu.contains(event.target as Node)) {
            languageDropdownMenu.classList.add('hidden');
        }
    });
    
    // Close modals on overlay click
    [aboutModal, faqModal, imageGalleryModal, loginModal, navModal].forEach(modal => {
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // --- APP INITIALIZATION ---
    populateProvinces();
    updateLocationUI();
    initializeLocationMap();
    switchLanguage(currentLang);
    const savedTheme = localStorage.getItem('whereis-theme') as 'light' | 'dark' | null;
    applyTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    showPage(pageLocation);
};

document.addEventListener('DOMContentLoaded', initializeApplication);