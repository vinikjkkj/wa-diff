__d(
  "WAWebNewsletterStatusIntroContent",
  [
    "fbt",
    "WDSIconIcAddAPhoto.react",
    "WDSIconIcPublic.react",
    "WDSIconIcVisibilityOff.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return [
        {
          Icon: r("WDSIconIcAddAPhoto.react"),
          key: "easily-share-moments",
          title: s._(/*BTDS*/ "Easily share moments"),
          description: s._(/*BTDS*/ "They'll disappear after 24 hours."),
        },
        {
          Icon: r("WDSIconIcPublic.react"),
          key: "anyone-can-view",
          title: s._(/*BTDS*/ "Anyone can view, react or reshare"),
          description: s._(/*BTDS*/ "Channel statuses are public."),
        },
        {
          Icon: r("WDSIconIcVisibilityOff.react"),
          key: "viewers-see-channel",
          title: s._(/*BTDS*/ "Viewers see your channel, not you"),
          description: s._(
            /*BTDS*/ "They can't see your phone number, profile picture or name.",
          ),
        },
      ];
    }
    l.getNewsletterStatusIntroContent = e;
  },
  226,
);
