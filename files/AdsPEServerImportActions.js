__d(
  "AdsPEServerImportActions",
  [
    "AdsAddToastCardAction",
    "AdsDataAtom",
    "AdsDismissToastCardAction",
    "AdsPEFluxImportChooseFileClickedAction",
    "AdsPEFluxImportFileRemovedAction",
    "AdsPEFluxImportFileSelectedAction",
    "AdsPEFluxImportImageRemovedAction",
    "AdsPEFluxImportVideoRemovedAction",
    "AdsPEImportViewDetailsClickAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("AdsDataAtom"))).handleUpdateFromServerResponse(t);
    }
    function u(t) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return s(t);
      });
    }
    function c() {
      r("AdsPEFluxImportFileSelectedAction").dispatch(
        {},
        { line: "42", module: "AdsPEServerImportActions.js", moduleID: i.id },
      );
    }
    function d() {
      r("AdsPEFluxImportFileRemovedAction").dispatch(
        {},
        { line: "46", module: "AdsPEServerImportActions.js", moduleID: i.id },
      );
    }
    function m() {
      r("AdsPEFluxImportImageRemovedAction").dispatch(
        {},
        { line: "50", module: "AdsPEServerImportActions.js", moduleID: i.id },
      );
    }
    function p() {
      r("AdsPEFluxImportVideoRemovedAction").dispatch(
        {},
        { line: "54", module: "AdsPEServerImportActions.js", moduleID: i.id },
      );
    }
    function _() {
      r("AdsPEFluxImportChooseFileClickedAction").dispatch(
        {},
        { line: "58", module: "AdsPEServerImportActions.js", moduleID: i.id },
      );
    }
    function f() {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return r("AdsPEImportViewDetailsClickAction").dispatch(
          {},
          { line: "63", module: "AdsPEServerImportActions.js", moduleID: i.id },
        );
      });
    }
    function g(t) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return r("AdsAddToastCardAction").dispatch(
          { toastCard: t },
          { line: "69", module: "AdsPEServerImportActions.js", moduleID: i.id },
        );
      });
    }
    function h(t) {
      var n = t.id;
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return r("AdsDismissToastCardAction").dispatch(
          { id: n },
          { line: "75", module: "AdsPEServerImportActions.js", moduleID: i.id },
        );
      });
    }
    var y = function () {
        var e = this.constructor.name;
        if (!e) {
          var t = this.constructor.toString().match(/function (\w+)/);
          t && (e = t[1]);
        }
        ((this.type = e), (this.actionType = e));
      },
      C = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this) || this), (r.token = t), (r.error = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      b = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.progress = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      v = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this) || this),
            (r.token = t),
            n != null && (r.state = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      S = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.accountID = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      R = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.pastedText = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(S),
      L = (function (e) {
        function t(t) {
          var n, r, o;
          return (
            t === void 0 && (t = { shouldResetProgressState: !1 }),
            (o = e.call(this) || this),
            (o.shouldResetProgressState =
              (n = (r = t) == null ? void 0 : r.shouldResetProgressState) !=
              null
                ? n
                : !1),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      E = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.pastedText = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      k = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this) || this),
            (o.sheet = t),
            (o.images = n),
            (o.videos = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      I = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      T = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      D = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      x = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(b),
      $ = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(C),
      P = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this) || this),
            (r.filename = t),
            (r.hash = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      N = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      M = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(b),
      w = (function (e) {
        function t(t, n, r) {
          var o;
          return ((o = e.call(this, t, n) || this), (o.isComplete = r), o);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(C),
      A = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this) || this),
            (o.filename = t),
            (o.id = n),
            (o.isComplete = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      F = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      O = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(b),
      B = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(C),
      W = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.result = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      q = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      U = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      V = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.errorMessage = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      H = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this) || this),
            (r.images = t),
            (r.videos = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      G = (function (e) {
        function t(t, n, r) {
          var o;
          return ((o = e.call(this, t, n) || this), (o.pastedText = r), o);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(H),
      z = (function (e) {
        function t(t, n, r) {
          var o;
          return ((o = e.call(this, t, n) || this), (o.file = r), o);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(H),
      j = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.adImportSessionID = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      K = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(b),
      Q = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(C),
      X = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      Y = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.spec = ee(n)), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      J = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(b),
      Z = (function (e) {
        function t(t, n, r, o, a, i, l) {
          var s;
          return (
            (s = e.call(this, t) || this),
            (s.draftFragmentCount = r),
            (s.targetingSignalUpdate = o),
            (s.draftID = n),
            (s.draftFragmentIDs = a),
            (s.numCrepeErrors = i),
            (s.spec = l != null ? ee(l) : null),
            s
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v);
    function ee(e) {
      return {
        CampaignGroups: { data: [], errors: e.campaign_groups },
        Campaigns: { data: [], errors: e.campaigns },
        Adgroups: { data: [], errors: e.adgroups },
        Errors: e.others,
        FileHandle: null,
        AdImportSessionID: null,
      };
    }
    var te = "FragmentDownloadCompleted",
      ne = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.fragments = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      re = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(C),
      oe = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.file = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      ae = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(b),
      ie = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(C),
      le = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.spec = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      se = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      ue = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.sheet = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y),
      ce = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(y);
    ((l.dispatch = s),
      (l.dispatchAfterCurrentCycle = u),
      (l.fileSelected = c),
      (l.fileRemoved = d),
      (l.imageRemoved = m),
      (l.videoRemoved = p),
      (l.chooseFileClicked = _),
      (l.importViewDetailsClick = f),
      (l.addToastCard = g),
      (l.dismissToastCard = h),
      (l.ImportAction = y),
      (l.ImportErroredAction = C),
      (l.ImportCompletedAction = v),
      (l.OpenDialog = S),
      (l.OpenDialogWithPastedText = R),
      (l.CloseDialog = L),
      (l.PastedText = E),
      (l.SheetSelect = k),
      (l.ToggleShowPasteText = I),
      (l.ChooseImagesClick = T),
      (l.ChooseVideosClick = D),
      (l.ImageUploadProgressed = x),
      (l.ImageUploadErrored = $),
      (l.ImageUploaded = P),
      (l.ImageUploadCompleted = N),
      (l.VideoUploadProgressed = M),
      (l.VideoUploadErrored = w),
      (l.VideoUploaded = A),
      (l.VideoUploadCompleted = F),
      (l.TextFileReadProgressed = O),
      (l.TextFileReadErrored = B),
      (l.TextFileReadCompleted = W),
      (l.TextFileConvertToTSVStarted = q),
      (l.TextFileConvertToTSVCompleted = U),
      (l.TextFileConvertToTSVError = V),
      (l.StartImport = H),
      (l.StartImportFromPastedText = G),
      (l.StartImportFromFile = z),
      (l.AsyncParseJobStart = j),
      (l.ParseProgressed = K),
      (l.ParseErrored = Q),
      (l.ParseCompletedWithoutError = X),
      (l.ParseCompletedWithError = Y),
      (l.FragmentCreationProgressed = J),
      (l.FragmentCreationCompleted = Z),
      (l.fragmentDownloadCompletedActionType = te),
      (l.FragmentDownloadCompleted = ne),
      (l.FragmentDownloadErrored = re),
      (l.StartExcelUpload = oe),
      (l.ExcelUploadProgressed = ae),
      (l.ExcelUploadErrored = ie),
      (l.ExcelUploadCompleted = le),
      (l.StartTSVParse = se),
      (l.StartExcelParse = ue),
      (l.OpenSelectSheetDialog = ce));
  },
  98,
);
