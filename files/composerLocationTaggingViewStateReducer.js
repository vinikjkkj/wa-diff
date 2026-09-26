__d(
  "composerLocationTaggingViewStateReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends({}, e, {
        locationMinutiae: {
          address: t.address,
          categoryIcon: t.categoryIcon,
          isGeohub: t.is_geohub,
          isVerified: t.isVerified,
          name: t.name,
          placeID: t.id,
          showAttachment: !0,
        },
      });
    }
    function l(e) {
      return babelHelpers.extends({}, e, { locationMinutiae: void 0 });
    }
    function s(t, n) {
      switch (n.type) {
        case "SET_LOCATION_TAG_ID":
          return e(t, n);
        case "CLEAR":
          return l(t);
      }
      return t;
    }
    i.default = s;
  },
  66,
);
