(function(window, undefined) {
  var dictionary = {
    "adf5a582-2f0b-41cd-a530-0a761fb4de53": "ResetSuccess",
    "70162bbb-feae-4b49-ae8e-f6df7ca79204": "EditClassDetails",
    "a61a1b1e-71e6-49e2-82be-5af9a783a9d9": "ImportedCalendar",
    "56dc4dd8-c664-4997-80e0-b74360380dc9": "ForgetPassword",
    "f2376bc5-8585-4b55-b256-f5d4df5ac741": "AddedNotification",
    "4ffec82d-6968-4a08-abf2-0aa39cd50d6d": "Sign Up",
    "6f491cc1-2679-456e-b726-6b9d96fa983c": "Settings",
    "001e377c-b1c0-44f0-bb0e-5c3f2a64687d": "Timetable",
    "191755ec-a1c1-4b56-a17a-569a95677c00": "AddNotificationDetails",
    "6342c2f6-5b7a-452d-9dce-15c51b2f6bbf": "Menu",
    "6c25c136-4af0-4a2f-9b6d-2110da29dc3c": "AddedTimetable",
    "c8464ceb-b90f-4fe1-97f0-565329d63fab": "AddClassDetails",
    "be549f48-867b-480e-82d0-18c9c2cd6cf6": "Add",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "3b051b4e-cf27-4246-a920-a8da245ba7fb": "ImportCalendar",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);