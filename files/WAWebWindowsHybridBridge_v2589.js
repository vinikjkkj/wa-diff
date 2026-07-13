__d(
  "WAWebWindowsHybridBridge.v2589",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2589",
    "WAWebWindowsHybridBridgeAbProps.v2589",
    "WAWebWindowsHybridBridgeAdv.v2589",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2589",
    "WAWebWindowsHybridBridgeConnection.v2589",
    "WAWebWindowsHybridBridgeContacts.v2589",
    "WAWebWindowsHybridBridgeDebugFeatures.v2589",
    "WAWebWindowsHybridBridgeLinksPreview.v2589",
    "WAWebWindowsHybridBridgeMediaFiles.v2589",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2589",
    "WAWebWindowsHybridBridgeNativeAppState.v2589",
    "WAWebWindowsHybridBridgePictures.v2589",
    "WAWebWindowsHybridBridgePreferences.v2589",
    "WAWebWindowsHybridBridgeRateTheApp.v2589",
    "WAWebWindowsHybridBridgeScalingControl.v2589",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2589",
    "WAWebWindowsHybridBridgeSharesheet.v2589",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2589",
    "WAWebWindowsHybridBridgeTouchpadFix.v2589",
    "WAWebWindowsHybridBridgeVoip.v2589",
    "WAWebWindowsHybridBridgeWam.v2589",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2589",
          ).WindowsHybridBridgeAbProps_v2589)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2589",
          ).WindowsHybridBridgeWam_v2589)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2589",
          ).WindowsHybridBridgePreferences_v2589)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2589",
          ).WindowsHybridBridgeScalingControl_v2589)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2589",
          ).WindowsHybridBridgePictures_v2589)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2589",
            ).WindowsHybridBridgeDebugFeatures_v2589)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2589",
          ).VoipWinRTBridge_v2589)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2589",
          ).WAWebWindowsHybridBridgeRateTheApp_v2589)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2589",
          ).WindowsHybridBridgeConnection_v2589)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2589",
          ).WindowsHybridBridgeTouchpadFix_v2589)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2589",
          ).WindowsHybridBridgeLinksPreview_v2589)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2589",
            ).WindowsHybridBridgeContacts_v2589)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2589",
            ).WindowsHybridBridgeContacts_v2589)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2589",
          ).WAWebWindowsHybridBridgeMediaFiles_v2589)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2589",
          ).WAWebWindowsHybridBridgeSharesheet_v2589)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2589",
          ).WindowsHybridAppActivationBridge_v2589)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2589",
          ).WindowsHybridBridgeNativeAppState_v2589)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2589",
          ).WindowsHybridBridgeSystemIntegrations_v2589)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2589",
          ).WindowsHybridBridgeBrowserExtensions_v2589)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2589",
          ).WindowsHybridBridgeSeamlessMigration_v2589)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2589",
          ).WindowsHybridBridgeMediaTranscoder_v2589)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2589",
          ).WindowsHybridBridgeAdv_v2589)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2589 = e;
  },
  98,
);
