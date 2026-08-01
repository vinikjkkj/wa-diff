__d(
  "AsyncDOM",
  ["CSS", "DOM", "FBLogger"],
  function (t, n, r, o, a, i) {
    var e = {
      invoke: function (t, r) {
        for (var e = 0; e < t.length; ++e) {
          var o = t[e],
            a = o[0],
            i = o[1],
            l = o[2],
            s = o[3],
            u = (l && r) || null;
          switch (
            (i && (u = n("DOM").scry(u || document.documentElement, i)[0]),
            u ||
              n("FBLogger")("async_dom").warn(
                "Could not find relativeTo element for %s AsyncDOM operation based on selector: %s",
                a,
                i,
              ),
            a)
          ) {
            case "hide":
              n("CSS").hide(u);
              break;
            case "show":
              n("CSS").show(u);
              break;
            case "setContent":
              n("DOM").setContent(u, s);
              break;
            case "appendContent":
              n("DOM").appendContent(u, s);
              break;
            case "prependContent":
              n("DOM").prependContent(u, s);
              break;
            case "insertAfter":
              n("DOM").insertAfter(u, s);
              break;
            case "insertBefore":
              n("DOM").insertBefore(u, s);
              break;
            case "remove":
              n("DOM").remove(u);
              break;
            case "replace":
              n("DOM").replace(u, s);
              break;
            default:
              n("FBLogger")("async_dom").warn(
                "Received invalid command %s for AsyncDOM operation",
                a,
              );
          }
        }
      },
    };
    a.exports = e;
  },
  null,
);
