__d(
  "WAWebBugnubV2Popup.react",
  [
    "WALogger",
    "WASmaxBugReportingReportBugRPC",
    "WAWebABProps",
    "WAWebActionMenuItem.react",
    "WAWebBugReportSessionWamEvent",
    "WAWebCheckmarkIcon.react",
    "WAWebClickableLink.react",
    "WAWebClientServerJoinKeyGenerator",
    "WAWebConfirmPopup.react",
    "WAWebCrashlog",
    "WAWebCreateBugnubTaskUrl",
    "WAWebCurrentUser",
    "WAWebDownloadWebLogs",
    "WAWebDropdownV2.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGetBugReportingCategories",
    "WAWebLexicalWAWebMenu.react",
    "WAWebLoggerDebugInfo",
    "WAWebMenu.react",
    "WAWebMenuBar.react",
    "WAWebMenuItems.react",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebOpenBugReportForm",
    "WAWebRichTextField.react",
    "WAWebScreenshotUpload.react",
    "WAWebSearchInput",
    "WAWebSimpleSearch",
    "WAWebSupportBugReportSubmitMutation",
    "WAWebText.react",
    "WAWebTextLineClamp.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebWamEnumBugReportFlowAction",
    "WAWebWdsPictoSucessCelebrationTickIcon.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcMoreVert.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = {
        titleContainer: { textAlign: "x2b8uid", $$css: !0 },
        categoryClickable: { width: "xh8yej3", display: "x78zum5", $$css: !0 },
        categoryLabel: { fontSize: "x1jchvi3", $$css: !0 },
        categoryLabelDefault: { color: "x14ug900", $$css: !0 },
        categoryLabelDeemphasized: { color: "xhslqc4", $$css: !0 },
        tealColor: { color: "x1v5yvga", $$css: !0 },
      };
    function h(e) {
      var t = e.popoverPortalEl,
        a = _(null);
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "end",
        children: [
          c.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            children: "Report a bug",
          }),
          c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            icon: c.jsx(r("WDSIconIcMoreVert.react"), {}),
            ref: a,
            testid: void 0,
            title: "Menu",
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
            minWidth: 120,
            popoverPortal: t != null ? t : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            target: a,
            children: c.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                  onSelect: S,
                  optionId: "open-butterfly-form",
                  primary: "Open Butterfly Form",
                }),
                c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                  onSelect: o("WAWebDownloadWebLogs")
                    .createDownloadDataForMdWebLogs,
                  optionId: "download-logs",
                  primary: "Download Logs",
                }),
                c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                  onSelect: o("WAWebDownloadWebLogs")
                    .createDownloadDataForLastCallLog,
                  optionId: "download-last-call-log",
                  primary: "Download Last Call Log",
                }),
                c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                  onSelect: L,
                  optionId: "analyze-with-wamate",
                  primary: "Analyze with WAMate",
                }),
                n("cr:17219") != null
                  ? c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                      onSelect: function () {
                        var e;
                        (e = n("cr:17219").getWindowsBridge()) == null ||
                          (e = e.getDebugFeatures()) == null ||
                          e.saveNativeLogs();
                      },
                      optionId: "download-native-logs",
                      primary: "Download Native Logs",
                    })
                  : null,
              ],
            }),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.categoryData,
        n = e.onSelectCategory,
        r = e.renderItem,
        a = e.selectedCategory,
        i = f(),
        l = i[0],
        s = i[1],
        u = p(
          function () {
            var e = t;
            return (
              l != null &&
                l.length &&
                (e = e.filter(function (e) {
                  return o("WAWebSimpleSearch").simpleSearch(l, [
                    e.menuItem.searchCriteria,
                  ]);
                })),
              e
            );
          },
          [t, l],
        );
      return c.jsx(o("WAWebSearchInput").SearchInput, {
        colorScheme: "darker",
        onSearch: s,
        padding: [16, 16, 8, 16],
        placeholder: "Search bug category",
        children: c.jsx(
          o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
          {
            data: u,
            initialActiveOptionId: a,
            material: !0,
            maxHeight: 400,
            minWidth: 460,
            onSelect: n,
            renderItem: r,
            reorderAnimationsEnabled: !1,
          },
        ),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = (function () {
      var e = o("WAWebGetBugReportingCategories").getBugReportingCategories(),
        t = e.map(function (e) {
          var t = e.subtitle ? Math.ceil(e.subtitle.length / 60) : 0,
            n = 60 + (t > 1 ? (t - 1) * 20 : 0);
          return {
            itemKey: e.id,
            height: Math.max(n, 60),
            menuItem: {
              optionId: e.id,
              primary: e.title,
              secondary: e.subtitle,
              textWrap: "wrap",
              searchCriteria: e.title + " " + e.subtitle,
            },
          };
        });
      return (
        t.push({
          itemKey: "none",
          height: 60,
          menuItem: {
            optionId: "none",
            primary: "None",
            secondary: "",
            textWrap: "wrap",
            searchCriteria: "None",
          },
        }),
        t
      );
    })();
    function b(t) {
      var a,
        i,
        l = t.customCloseMediaModal,
        s = t.customCloseModal,
        u = t.customOpenMediaModal,
        d = t.customOpenSupportModal,
        p = t.popoverPortalEl,
        b = t.prefilledDescription,
        v = t.prefilledTitle,
        S =
          s != null
            ? s
            : function () {
                return o("WAWebModalManager").ModalManager.close();
              },
        R = function (t) {
          new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
            bugReportFlowAction: t,
          }).commit();
        };
      m(function () {
        R(
          o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
            .BUG_REPORT_FORM_IMPRESSION,
        );
      }, []);
      var L = f(b != null ? b : ""),
        E = L[0],
        k = L[1],
        I = f(v != null ? v : ""),
        T = I[0],
        D = I[1],
        x = f(null),
        $ = x[0],
        P = x[1],
        N = o("WAWebGetBugReportingCategories").getBugReportingCategories(),
        M = f({ type: "clean" }),
        w = M[0],
        A = M[1],
        F = f(!1),
        O = F[0],
        B = F[1],
        W = f({ state: "none", mediaFiles: [] }),
        q = W[0],
        U = W[1],
        V = _(null),
        H = _(),
        G = function (t) {
          return c.jsx(
            o("WAWebMenuItems.react").ActionMenuItem,
            babelHelpers.extends({}, t.menuItem, {
              detailRight:
                t.itemKey === $
                  ? c.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                      iconXstyle: g.tealColor,
                    })
                  : void 0,
            }),
          );
        };
      if (o("WAWebCurrentUser").isEmployee()) {
        var z = function (t) {
            var e = t
              .trim()
              .replace(
                /(^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDD40-\uDD49\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDED0-\uDEE3\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59\uDFF0-\uDFF9]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDDE0-\uDDE9\uDF50-\uDF59\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD818[\uDD30-\uDD39]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDD70-\uDD79\uDE80-\uDE96\uDFF4-\uDFF6]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD839[\uDCF0-\uDCF9\uDDF1-\uDDFA]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])(?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDED0\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F])[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000])/g,
                "",
              );
            return e.length > 10;
          },
          j = function (t) {
            var e = t.text;
            (e.length === 0
              ? A({ type: "clean" })
              : !z(e) && w.type === "descriptionError"
                ? A({ type: "descriptionError" })
                : A({ type: "dirty" }),
              k(e));
          },
          K = function (t) {
            var e = new Uint8Array(t);
            return btoa(String.fromCharCode.apply(null, e));
          },
          Q = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (R(
                  o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                    .SUBMIT_CLICK,
                ),
                !z(E))
              ) {
                A({ type: "descriptionError" });
                return;
              }
              A({ type: "uploading" });
              var t = JSON.stringify(
                  yield o("WAWebLoggerDebugInfo").getDebugInfo({
                    supportTag: "InAppBugReporting",
                    convertFields: !0,
                    addUserAgentDetails: !0,
                  }),
                  null,
                  2,
                ),
                n = yield o("WAWebCrashlog").upload({
                  reason: o("WAWebCrashlog").USER_REPORT,
                  immediate: !1,
                  isHighPri: !0,
                  logType: o("WAWebCrashlog").LogType.SUPPORT,
                });
              n == null
                ? R(
                    o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                      .DEVICE_LOG_UPLOAD_FAILED,
                  )
                : R(
                    o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                      .DEVICE_LOG_UPLOAD_SUCCESSFUL,
                  );
              var a = r("WAWebEnvironment").isWindows
                ? o("WAWebCreateBugnubTaskUrl").enrichBugReportDescription(E)
                : E;
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "bug_reporting_using_graphql",
                )
              )
                try {
                  var i = yield o(
                    "WAWebSupportBugReportSubmitMutation",
                  ).submitBugReportGraphQL({
                    description: a,
                    debug_info_json: t,
                    device_log_handle: n,
                    title: T || null,
                    category: o(
                      "WAWebSupportBugReportSubmitMutation",
                    ).bugCategoryTypeForGraphQL($),
                    client_server_join_key: o(
                      "WAWebClientServerJoinKeyGenerator",
                    ).generateClientServerJoinKey(),
                    media: q.mediaFiles.map(function (e) {
                      return {
                        cipher_key: K(e.encKey),
                        element_value: e.url,
                        iv: K(e.iv),
                        type:
                          e.mediaType ===
                          o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
                            ? "VIDEO"
                            : "IMAGE",
                        file_name: e.filename,
                      };
                    }),
                  });
                  if (i.success === !0)
                    if (i.task_id != null)
                      X({ reportType: "task", reportId: i.task_id });
                    else {
                      var l;
                      X({
                        reportType: "bug",
                        reportId: (l = i.bug_report_id) != null ? l : "",
                      });
                    }
                  else Y();
                } catch (t) {
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "bug report GraphQL submission failed: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("bug-report-graphql-fail"),
                    Y());
                }
              else {
                var s = yield o(
                  "WASmaxBugReportingReportBugRPC",
                ).sendReportBugRPC({
                  descriptionElementValue: a,
                  debugInformationJsonElementValue: t,
                  deviceLogHandleArgs:
                    n != null ? { deviceLogHandleElementValue: n } : void 0,
                  mediaArgs: q.mediaFiles.map(function (e) {
                    return {
                      mediaCipherKey: K(e.encKey),
                      mediaElementValue: e.url,
                      mediaIv: K(e.iv),
                      mediaType:
                        e.mediaType ===
                        o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
                          ? "video"
                          : "image",
                    };
                  }),
                  titleArgs: T ? { titleElementValue: T } : void 0,
                  categoryArgs: $ ? { categoryElementValue: $ } : void 0,
                  clientServerJoinKeyArgs: {
                    clientServerJoinKeyElementValue: o(
                      "WAWebClientServerJoinKeyGenerator",
                    ).generateClientServerJoinKey(),
                  },
                });
                switch (s.name) {
                  case "ReportBugResponseSuccess": {
                    X(
                      o(
                        "WAWebSupportBugReportSubmitMutation",
                      ).resolveSmaxReportId(s.value.taskIdElementValue),
                    );
                    break;
                  }
                  case "ReportBugResponseError":
                  default: {
                    Y();
                    break;
                  }
                }
              }
            });
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          X = function (t) {
            (new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
              bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                .BUG_REPORT_FLOW_ACTION.SUBMISSION_SUCCESSFUL,
              bugReportMediaCount: q.mediaFiles.length,
              submitBugCategory: $ == null ? void 0 : $.toString(),
              submitBugContainsTitle: T != null && T.length > 0,
            }).commit(),
              A({
                type: "success",
                reportType: t.reportType,
                reportId: t.reportId,
              }));
          },
          Y = function () {
            (new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
              bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
                .BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
              bugReportMediaCount: q.mediaFiles.length,
              submitBugCategory: $ == null ? void 0 : $.toString(),
              submitBugContainsTitle: T != null && T.length > 0,
            }).commit(),
              A({ type: "uploadError" }));
          };
        if (w.type === "success") {
          new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
            bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction")
              .BUG_REPORT_FLOW_ACTION.SUCCESS_VIEW_IMPRESSION,
            bugReportTaskId: w.reportId,
          }).commit();
          var J;
          return (
            w.reportType === "bug"
              ? (J = c.jsx(o("WAWebFlex.react").FlexItem, {
                  testid: void 0,
                  children: c.jsxs(r("WDSText.react"), {
                    colorName: "contentDeemphasized",
                    textAlign: "center",
                    type: "Body2",
                    children: [
                      "Thank you for helping improve WhatsApp. A bug report has been created:",
                      c.jsxs(r("WAWebClickableLink.react"), {
                        onClick: function () {
                          o("WAWebExternalLink.react").openExternalLink(
                            "https://www.internalfb.com/bug/" + w.reportId,
                          );
                        },
                        testid: void 0,
                        children: [" ", w.reportId],
                      }),
                      ". A task will be created in a few minutes, and you'll receive the task ID via email and in the Task Tool.",
                    ],
                  }),
                }))
              : (J = c.jsx(o("WAWebFlex.react").FlexItem, {
                  testid: void 0,
                  children: c.jsxs(r("WDSText.react"), {
                    colorName: "contentDeemphasized",
                    textAlign: "center",
                    type: "Body2",
                    children: [
                      "Thank you for helping improve WhatsApp. A task was created automatically for this bug report:",
                      c.jsxs(r("WAWebClickableLink.react"), {
                        onClick: function () {
                          o("WAWebExternalLink.react").openExternalLink(
                            "https://internalfb.com/tasks/?t=" + w.reportId,
                          );
                        },
                        testid: void 0,
                        children: [" ", "T", w.reportId],
                      }),
                      ".",
                    ],
                  }),
                })),
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okText: "Done",
              onOK: S,
              testid: void 0,
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    align: "center",
                    justify: "center",
                    marginBottom: 16,
                    children: c.jsx(
                      o("WAWebWdsPictoSucessCelebrationTickIcon.react")
                        .WdsPictoSucessCelebrationTickIcon,
                      { height: 88, width: 89 },
                    ),
                  }),
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    marginBottom: 24,
                    xstyle: g.titleContainer,
                    children: c.jsx(r("WAWebTextLineClamp.react"), {
                      maxLines: 3,
                      children: c.jsx(r("WDSText.react"), {
                        colorName: "contentDefault",
                        textAlign: "center",
                        type: "Headline1",
                        children: "Bug submitted successfully",
                      }),
                    }),
                  }),
                  J,
                ],
              }),
            })
          );
        }
        return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okDisabled: w.type === "uploading" || w.type === "clean" || O,
          okSpinner: w.type === "uploading",
          okText: "Submit",
          onCancel: function () {
            (R(
              o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                .CANCEL_CLICK,
            ),
              S());
          },
          onOK: Q,
          testid: void 0,
          title: c.jsx(h, { popoverPortalEl: p }),
          children: [
            c.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              type: "Body2",
              children:
                "If you want to report a bug for a specific message, you can right-click on it.",
            }),
            c.jsx(o("WAWebRichTextField.react").RichTextField, {
              enterIsNewLine: !0,
              error:
                w.type === "descriptionError"
                  ? "Describe the bug further"
                  : void 0,
              hideFloatingLabel: !0,
              maxLength: 2e3,
              maxVisibleLines: 7,
              minVisibleLines: 2,
              multiline: !0,
              onChange: j,
              placeholder:
                "Describe the bug, including steps to reproduce, expected vs. actual behavior...",
              value: E,
            }),
            c.jsx(o("WAWebScreenshotUpload.react").WAWebScreenshotUpload, {
              customCloseMediaModal: l,
              customOpenMediaModal: u,
              customOpenSupportModal: d,
              mediaState: q,
              onChangeState: U,
              onUploadStateChange: B,
            }),
            c.jsx(o("WAWebRichTextField.react").RichTextField, {
              maxLength: 200,
              onChange: function (t) {
                var e = t.text;
                D(e);
              },
              placeholder: "Title (optional)",
              value: T,
            }),
            c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              className: "xlxy82 x1q0q8m5 x16pkwpw x1ypdohk",
              grow: 0,
              shrink: 0,
              children: [
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  ref: V,
                  testid: void 0,
                  xstyle: [
                    g.categoryClickable,
                    o("WAWebUISpacing").uiPadding.top8,
                    o("WAWebUISpacing").uiPadding.bottom5,
                  ],
                  children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    grow: 1,
                    justify: "all",
                    children: [
                      c.jsx(o("WAWebFlex.react").FlexItem, {
                        align: "center",
                        justify: "start",
                        xstyle: [
                          g.categoryLabel,
                          $ != null
                            ? g.categoryLabelDefault
                            : g.categoryLabelDeemphasized,
                        ],
                        children:
                          (a =
                            (i = N.find(function (e) {
                              return e.id === $;
                            })) == null
                              ? void 0
                              : i.title) != null
                            ? a
                            : "Category (optional)",
                      }),
                      c.jsx(r("WDSIconIcArrowDropDown.react"), {
                        xstyle: o("WAWebUISpacing").uiPadding.start8,
                      }),
                    ],
                  }),
                }),
                c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
                  buffer: 4,
                  controllerRef: H,
                  initHandling: "click",
                  material: !0,
                  popoverPortal: p != null ? p : void 0,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  target: V,
                  children: c.jsx(y, {
                    categoryData: C,
                    onSelectCategory: function (t) {
                      var e;
                      if (t === "none") P(null);
                      else {
                        var n = N.find(function (e) {
                          return e.id === t;
                        });
                        n && P(n.id);
                      }
                      ((e = H.current) == null || e.hidePopover(),
                        R(
                          o("WAWebWamEnumBugReportFlowAction")
                            .BUG_REPORT_FLOW_ACTION.SUBMIT_BUG_CATEGORY_CLICK,
                        ));
                    },
                    renderItem: G,
                    selectedCategory: $,
                  }),
                }),
              ],
            }),
            c.jsxs(o("WAWebText.react").WAWebTextSmall, {
              marginTop: 24,
              children: [
                "By sending, you allow us to access your device logs, phone number and debug info, and include them in the task.",
                " ",
                c.jsx(r("WAWebClickableLink.react"), {
                  onClick: function () {
                    o("WAWebExternalLink.react").openExternalLink(
                      o("WAWebFaqUrl").getSupportChatFaqUrl(),
                    );
                  },
                  children: "Learn more",
                }),
              ],
            }),
            w.type === "uploadError" &&
              c.jsx(o("WAWebText.react").WAWebTextSmall, {
                color: "critical",
                marginTop: 24,
                children:
                  "Something went wrong while submitting. Please try again.",
              }),
          ],
        });
      }
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t, n) {
      var r = n != null ? n : {},
        a = r.customCloseMediaModal,
        i = r.customCloseModal,
        l = r.customOpenMediaModal,
        s = r.customOpenModal,
        u = r.customOpenSupportModal,
        d = r.popoverPortalEl,
        m = c.jsx(b, {
          customCloseMediaModal: a,
          customCloseModal: i,
          customOpenMediaModal: l,
          customOpenSupportModal: u,
          popoverPortalEl: d,
          prefilledDescription: e,
          prefilledTitle: t,
        });
      s != null
        ? s(m, { skipDarkTheme: !0 })
        : o("WAWebModalManager").ModalManager.open(m);
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebOpenBugReportForm").openBugReportForm();
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebCrashlog").upload({
              reason: o("WAWebCrashlog").MANUAL_UPLOAD,
              isHighPri: !0,
              immediate: !0,
            });
            if (e != null) {
              var t = "calling analyze calls from logID " + e,
                n = encodeURIComponent("wamate " + t),
                a = "https://www.internalfb.com/intern/bunny/?q=" + n;
              o("WAWebExternalLink.react").openExternalLink(a);
            } else
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: "Failed to upload logs. Please try again.",
                }),
              );
          } catch (e) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAMate] Failed to upload logs",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("wamate-upload-error"),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: "Failed to upload logs. Please try again.",
                }),
              ));
          }
        })),
        E.apply(this, arguments)
      );
    }
    l.openBugNubV2Popup = v;
  },
  98,
);
