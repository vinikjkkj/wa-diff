__d(
  "getRelayFBMissingFieldHandlers",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime").ROOT_TYPE;
    function l() {
      return [
        {
          handle: function (n, r, o) {
            if (
              r != null &&
              r.getType() === e &&
              n.name === "node" &&
              Object.prototype.hasOwnProperty.call(o, "id")
            )
              return o.id;
          },
          kind: "linked",
        },
        {
          handle: function (n, r, o, a) {
            if (
              r != null &&
              r.getType() === e &&
              n.name.startsWith("fetch__") &&
              Object.prototype.hasOwnProperty.call(o, "id")
            ) {
              var t = o.id,
                i = a.get(t);
              if (i != null && i.getType() === n.name.substr(7)) return t;
            }
          },
          kind: "linked",
        },
        {
          handle: function (n, r, o) {
            if (
              r != null &&
              r.getType() === e &&
              n.name === "nodes" &&
              Object.prototype.hasOwnProperty.call(o, "ids")
            )
              return o.ids;
          },
          kind: "pluralLinked",
        },
      ];
    }
    a.exports = l;
  },
  null,
);
