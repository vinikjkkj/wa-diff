__d(
  "WAWebContactSearchModel",
  [
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebPhoneNumberSearch",
    "WAWebSearchModel",
    "WAWebSearchUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = "ContactSearch"),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.queryFn = function (t, n) {
          var e = o("WAWebSearchUtils").normalizeString(t),
            r = o("WAWebPhoneNumberSearch").numberSearch(e),
            a = o("WAWebContactCollection").ContactCollection.searchContacts({
              query: { text: e, number: r },
              filter: {
                filterFn: function (t) {
                  return (
                    o("WAWebContactGetters").getIsUser(t) &&
                    !o("WAWebBotUtils").isHiddenBotWid(t.id)
                  );
                },
              },
            }),
            i = o("WAWebSearchUtils").filterPaginate(
              a.map(function (e) {
                var t = e.contact;
                return t;
              }),
              function (e) {
                return e;
              },
              n == null ? void 0 : n.pagination,
            ),
            l = i.pagination,
            s = i.results,
            u = s.map(function (e) {
              return { id: e.id.toString(), type: "contact", data: e };
            });
          return { type: "contact", results: u, pagination: l };
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    l.ContactSearch = e;
  },
  98,
);
