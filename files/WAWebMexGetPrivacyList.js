__d(
  "WAWebMexGetPrivacyList",
  [
    "WAWebMexClient",
    "WAWebMexGetPrivacyListsQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebMexGetPrivacyListsQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMexClient").fetchQuery(s, {
            input: {
              query_input: [
                {
                  jid: e.jid,
                  privacy_contact_list_type: {
                    dhash: e.dhash,
                    category: e.category,
                    type: e.type,
                  },
                },
              ],
            },
          });
          return t;
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchPrivacyList = u;
  },
  98,
);
