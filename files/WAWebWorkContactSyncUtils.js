__d(
  "WAWebWorkContactSyncUtils",
  [
    "WAWebConfirmPopup.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebWorkContactSyncModal.react",
    "WDSText.react",
    "WDSVars.stylex",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return !(
        e == null ||
        typeof e != "object" ||
        ("familyName" in e &&
          e.familyName != null &&
          typeof e.familyName != "string") ||
        ("givenName" in e &&
          e.givenName != null &&
          typeof e.givenName != "string") ||
        ("phoneNumber" in e &&
          e.phoneNumber != null &&
          typeof e.phoneNumber != "string")
      );
    }
    function c(e) {
      if (!u(e) || e == null || typeof e != "object") return null;
      var t =
          "familyName" in e && typeof e.familyName == "string"
            ? e.familyName
            : void 0,
        n =
          "givenName" in e && typeof e.givenName == "string"
            ? e.givenName
            : void 0,
        r =
          "phoneNumber" in e && typeof e.phoneNumber == "string"
            ? e.phoneNumber
            : void 0;
      return { familyName: t, givenName: n, phoneNumber: r };
    }
    function d(e) {
      e.delete("work_contact_sync_data");
      var t =
        window.location.pathname + (e.toString() ? "?" + e.toString() : "");
      window.history.replaceState({}, "", t);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new URLSearchParams(window.location.search);
          try {
            for (
              var n = atob(decodeURIComponent(e)),
                a = new Uint8Array(n.length),
                i = 0;
              i < n.length;
              i++
            )
              a[i] = n.charCodeAt(i);
            var l = new DecompressionStream("deflate"),
              u = new Blob([a]).stream().pipeThrough(l),
              m = yield new Response(u).blob(),
              p = yield m.text(),
              _ = JSON.parse(p);
            if (
              _ != null &&
              typeof _ == "object" &&
              "type" in _ &&
              _.type === "work_contact_sync_data" &&
              "payload" in _ &&
              Array.isArray(_.payload)
            ) {
              var f = r("compactMap")(_.payload, c);
              (o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebWorkContactSyncModal.react"), {
                  workContacts: f,
                  onClose: o("WAWebModalManager").closeModalManager,
                }),
              ),
                d(t));
            }
          } catch (e) {
            var g;
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "work-contact-sync-utils",
                },
                type: o("WAWebModal.react").ModalTheme.Flex,
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: "Close",
                children: s.jsxs("div", {
                  style: {
                    minWidth: "450px",
                    paddingTop: (g = o("WDSVars.stylex")).WDSVars
                      .spacingDoublePlus,
                    paddingInline: g.WDSVars.spacingDoublePlus,
                    paddingBottom: g.WDSVars.spacingDoublePlus,
                  },
                  children: [
                    s.jsx("h1", {
                      style: {
                        fontSize: "18px",
                        marginBottom: g.WDSVars.spacingSinglePlus,
                      },
                      children: "Work Contact Sync Error",
                    }),
                    s.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: "Failed to decompress or parse sync data.",
                    }),
                  ],
                }),
              }),
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.handleWorkContactSync = m;
  },
  98,
);
