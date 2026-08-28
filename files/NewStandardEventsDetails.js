__d(
  "NewStandardEventsDetails",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        Contact: {
          name: s._(/*BTDS*/ "Contact"),
          description: s._(
            /*BTDS*/ "Track when people contact your business by telephone\/SMS, email, chat or other contact methods.",
          ),
          code: "fbq('track', 'Contact');",
          custom_event_type: "CONTACT",
        },
        CustomizeProduct: {
          name: s._(/*BTDS*/ "Customize product"),
          description: s._(
            /*BTDS*/ "Track when people choose customization options for one of your products prior to checkout (ex: car configurator or vacation product options).",
          ),
          code: "fbq('track', 'CustomizeProduct');",
          custom_event_type: "CUSTOMIZE_PRODUCT",
        },
        Donate: {
          name: s._(/*BTDS*/ "Donate"),
          description: s._(
            /*BTDS*/ "Track when people donate funds to your organization or cause.",
          ),
          code: "fbq('track', 'Donate');",
          custom_event_type: "DONATE",
        },
        FindLocation: {
          name: s._(/*BTDS*/ "Find location"),
          description: s._(
            /*BTDS*/ "Track when people find a specific location on your website or app, or directions to a location (ex: find product at a local store).",
          ),
          code: "fbq('track', 'FindLocation');",
          custom_event_type: "FIND_LOCATION",
        },
        Schedule: {
          name: s._(/*BTDS*/ "Schedule"),
          description: s._(
            /*BTDS*/ "Track when people make an appointment to visit you at one of your locations.",
          ),
          code: "fbq('track', 'Schedule');",
          custom_event_type: "SCHEDULE",
        },
        StartTrial: {
          name: s._(/*BTDS*/ "Start trial"),
          description: s._(
            /*BTDS*/ "Track when people begin a free trial of a product or service (ex: trial subscription).",
          ),
          code: "fbq('track', 'StartTrial');",
          custom_event_type: "START_TRIAL",
        },
        SubmitApplication: {
          name: s._(/*BTDS*/ "Submit application"),
          description: s._(
            /*BTDS*/ "Track when people submit an application for a product, service or program you offer (ex: credit card, educational program or job).",
          ),
          code: "fbq('track', 'SubmitApplication');",
          custom_event_type: "SUBMIT_APPLICATION",
        },
        Subscribe: {
          name: s._(/*BTDS*/ "Subscribe"),
          description: s._(
            /*BTDS*/ "Track when people begin a paid subscription of a product or service you offer.",
          ),
          code: "fbq('track', 'Subscribe');",
          custom_event_type: "SUBSCRIBE",
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
