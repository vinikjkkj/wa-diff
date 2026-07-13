__d(
  "WAWebWindowsHybridBridge.v2580",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2580",
    "WAWebWindowsHybridBridgeAbProps.v2580",
    "WAWebWindowsHybridBridgeAdv.v2580",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2580",
    "WAWebWindowsHybridBridgeConnection.v2580",
    "WAWebWindowsHybridBridgeContacts.v2580",
    "WAWebWindowsHybridBridgeDebugFeatures.v2580",
    "WAWebWindowsHybridBridgeLinksPreview.v2580",
    "WAWebWindowsHybridBridgeMediaFiles.v2580",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2580",
    "WAWebWindowsHybridBridgeNativeAppState.v2580",
    "WAWebWindowsHybridBridgePictures.v2580",
    "WAWebWindowsHybridBridgePreferences.v2580",
    "WAWebWindowsHybridBridgeRateTheApp.v2580",
    "WAWebWindowsHybridBridgeScalingControl.v2580",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2580",
    "WAWebWindowsHybridBridgeSharesheet.v2580",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2580",
    "WAWebWindowsHybridBridgeTouchpadFix.v2580",
    "WAWebWindowsHybridBridgeVoip.v2580",
    "WAWebWindowsHybridBridgeWam.v2580",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((this.serverEncKeySaltBridge = null),
          (e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2580",
          ).WindowsHybridBridgeAbProps_v2580)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2580",
          ).WindowsHybridBridgeWam_v2580)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2580",
          ).WindowsHybridBridgePreferences_v2580)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2580",
          ).WindowsHybridBridgeScalingControl_v2580)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2580",
          ).WindowsHybridBridgePictures_v2580)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2580",
            ).WindowsHybridBridgeDebugFeatures_v2580)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2580",
          ).VoipWinRTBridge_v2580)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2580",
          ).WAWebWindowsHybridBridgeRateTheApp_v2580)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2580",
          ).WindowsHybridBridgeConnection_v2580)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2580",
          ).WindowsHybridBridgeTouchpadFix_v2580)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2580",
          ).WindowsHybridBridgeLinksPreview_v2580)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2580",
            ).WindowsHybridBridgeContacts_v2580)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2580",
            ).WindowsHybridBridgeContacts_v2580)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2580",
          ).WAWebWindowsHybridBridgeMediaFiles_v2580)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2580",
          ).WAWebWindowsHybridBridgeSharesheet_v2580)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2580",
          ).WindowsHybridAppActivationBridge_v2580)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2580",
          ).WindowsHybridBridgeNativeAppState_v2580)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2580",
          ).WindowsHybridBridgeSystemIntegrations_v2580)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2580",
          ).WindowsHybridBridgeBrowserExtensions_v2580)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2580",
          ).WindowsHybridBridgeSeamlessMigration_v2580)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2580",
          ).WindowsHybridBridgeMediaTranscoder_v2580)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2580",
          ).WindowsHybridBridgeAdv_v2580)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2580 = e;
  },
  98,
);
