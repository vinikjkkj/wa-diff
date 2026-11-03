__d(
  "WAWebMexGetPrivacyList",
  ["WAWebMexClient", "WAWebMexGetPrivacyListsQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebMexGetPrivacyListsQuery.graphql"));
    async function u(e) {
      var t = await o("WAWebMexClient").fetchQuery(s, {
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
    }
    l.fetchPrivacyList = u;
  },
  98,
);
