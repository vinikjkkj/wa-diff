__d(
  "WAWebGetBlocklistJob",
  [
    "WALogger",
    "WASmaxBlocklistsGetBlockListRPC",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMultiDevice",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "fetchBlocklist failed: code ",
              " text ",
              "",
            ])),
          t,
          n,
        )
        .sendLogs("getBlocklist");
    }
    async function m() {
      var e = await o("WAWebUserPrefsMultiDevice").getBlocklistHash(),
        t = babelHelpers.extends(
          {},
          e != null && { itemArgs: { itemDhash: e } },
        ),
        n = await o("WASmaxBlocklistsGetBlockListRPC").sendGetBlockListRPC(t);
      switch (n.name) {
        case "GetBlockListResponseInternalServerError": {
          var r = n.value.errorServerErrors.value,
            a = r.code,
            i = r.text;
          return (d(Number(a), i), { errorCode: Number(a), errorText: i });
        }
        case "GetBlockListResponseInvalidRequest": {
          var l = n.value.errorGetBlocklistErrors.value,
            m = l.code,
            p = l.text;
          return (d(Number(m), p), { errorCode: Number(m), errorText: p });
        }
        case "GetBlockListResponseSuccessWithMatch":
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchBlocklist: GetBlockListResponseSuccessWithMatch ",
                  "",
                ])),
              n.value.type,
            ),
            { type: "match" }
          );
        case "GetBlockListResponseSuccessWithMismatch": {
          var g = n.value.listDhash,
            h = n.value.listItem.map(function (e) {
              var t;
              return {
                wid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                displayName:
                  (t = e.displayNameMixin) == null ? void 0 : t.displayName,
              };
            });
          return {
            type: "mismatch",
            dirty: !1,
            dhash: g,
            list: { items: h, addressingMode: "pn" },
          };
        }
        case "GetBlockListResponseMigratedSuccessWithMismatch": {
          var y = n.value.listDhash,
            C = n.value.listItem.map(function (e) {
              return babelHelpers.extends({}, f(e.blocklistIds), {
                active: e.active === "true",
                lid: o("WAWebJidToWid").lidUserJidToUserLid(e.jid),
              });
            });
          return {
            type: "mismatch",
            dirty: !1,
            dhash: y,
            list: { items: C, addressingMode: "lid" },
          };
        }
        case "GetBlockListResponseForceMigratedSuccessWithMismatch": {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "fetchBlocklist: received force-migrated dirty blocklist",
              ])),
          );
          var b = n.value.listDhash,
            v = _(n.value.listItem);
          return {
            type: "mismatch",
            dirty: !0,
            dhash: b,
            list: { items: v, addressingMode: "lid" },
          };
        }
        case "GetBlockListResponseCAPISuccessWithMismatch": {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchBlocklist: unexpected CAPI blocklist response",
                ])),
            )
            .sendLogs("getBlocklist-unexpected-capi-response");
          var S = n.value.listDhash,
            R = _(n.value.listItem);
          return {
            type: "mismatch",
            dirty: !1,
            dhash: S,
            list: { items: R, addressingMode: "lid" },
          };
        }
      }
    }
    function p(e) {
      return e.addressingMode === "pn"
        ? e.items.map(function (e) {
            return e.wid;
          })
        : e.items.map(function (e) {
            return e.lid;
          });
    }
    function _(e) {
      return r("compactMap")(e, function (e) {
        var t = e.jid;
        if (t != null)
          return babelHelpers.extends({}, f(e.blocklistIds), {
            active: e.active === "true",
            lid: o("WAWebJidToWid").lidUserJidToUserLid(t),
          });
        var n = f(e.blocklistIds);
        if ((n == null ? void 0 : n.pn) != null) {
          var r = o("WAWebLidMigrationUtils").toLid(n.pn);
          if (r != null)
            return babelHelpers.extends({}, n, {
              active: e.active === "true",
              lid: r,
            });
        }
        return null;
      });
    }
    function f(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.name === "Username" &&
          "value" in t
        ) {
          var n = t.value;
          return { username: n.username };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.name === "DisplayName" &&
          "value" in t
        ) {
          var r = t.value;
          return { displayName: r.displayName };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.name === "PnJid" &&
          "value" in t
        ) {
          var a = t.value;
          return { pn: o("WAWebJidToWid").userJidToUserWid(a.pnJid) };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.name === "GuestNameAndDisplayName" &&
          "value" in t
        ) {
          var i = t.value;
          return { displayName: i.displayName };
        }
        if (
          (((typeof t == "object" && t !== null) || typeof t == "function") &&
            t.name === "GuestName" &&
            "value" in t) ||
          (((typeof t == "object" && t !== null) || typeof t == "function") &&
            t.name === "UnknownIdentifier" &&
            "value" in t)
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    ((l.getBlocklist = m), (l.extractWids = p));
  },
  98,
);
