__d(
  "getRelayFBMissingFieldHandlers",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return [
        {
          handle: function (t, n, r) {
            if (
              n != null &&
              n.getType() === o("relay-runtime").ROOT_TYPE &&
              t.name === "node" &&
              Object.prototype.hasOwnProperty.call(r, "id")
            )
              return r.id;
          },
          kind: "linked",
        },
        {
          handle: function (t, n, r, a) {
            if (
              n != null &&
              n.getType() === o("relay-runtime").ROOT_TYPE &&
              t.name.startsWith("fetch__") &&
              Object.prototype.hasOwnProperty.call(r, "id")
            ) {
              var e = r.id,
                i = a.get(e);
              if (i != null && i.getType() === t.name.substr(7)) return e;
            }
          },
          kind: "linked",
        },
        {
          handle: function (t, n, r) {
            if (
              n != null &&
              n.getType() === o("relay-runtime").ROOT_TYPE &&
              t.name === "nodes" &&
              Object.prototype.hasOwnProperty.call(r, "ids")
            )
              return r.ids;
          },
          kind: "pluralLinked",
        },
      ];
    }
    l.default = e;
  },
  98,
);
