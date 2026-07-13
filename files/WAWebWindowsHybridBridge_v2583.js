__d(
  "WAWebWindowsHybridBridge.v2583",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2583",
    "WAWebWindowsHybridBridgeAbProps.v2583",
    "WAWebWindowsHybridBridgeAdv.v2583",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2583",
    "WAWebWindowsHybridBridgeConnection.v2583",
    "WAWebWindowsHybridBridgeContacts.v2583",
    "WAWebWindowsHybridBridgeDebugFeatures.v2583",
    "WAWebWindowsHybridBridgeLinksPreview.v2583",
    "WAWebWindowsHybridBridgeMediaFiles.v2583",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2583",
    "WAWebWindowsHybridBridgeNativeAppState.v2583",
    "WAWebWindowsHybridBridgePictures.v2583",
    "WAWebWindowsHybridBridgePreferences.v2583",
    "WAWebWindowsHybridBridgeRateTheApp.v2583",
    "WAWebWindowsHybridBridgeScalingControl.v2583",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2583",
    "WAWebWindowsHybridBridgeSharesheet.v2583",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2583",
    "WAWebWindowsHybridBridgeTouchpadFix.v2583",
    "WAWebWindowsHybridBridgeVoip.v2583",
    "WAWebWindowsHybridBridgeWam.v2583",
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
            "WAWebWindowsHybridBridgeAbProps.v2583",
          ).WindowsHybridBridgeAbProps_v2583)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2583",
          ).WindowsHybridBridgeWam_v2583)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2583",
          ).WindowsHybridBridgePreferences_v2583)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2583",
          ).WindowsHybridBridgeScalingControl_v2583)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2583",
          ).WindowsHybridBridgePictures_v2583)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2583",
            ).WindowsHybridBridgeDebugFeatures_v2583)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2583",
          ).VoipWinRTBridge_v2583)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2583",
          ).WAWebWindowsHybridBridgeRateTheApp_v2583)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2583",
          ).WindowsHybridBridgeConnection_v2583)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2583",
          ).WindowsHybridBridgeTouchpadFix_v2583)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2583",
          ).WindowsHybridBridgeLinksPreview_v2583)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2583",
            ).WindowsHybridBridgeContacts_v2583)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2583",
            ).WindowsHybridBridgeContacts_v2583)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2583",
          ).WAWebWindowsHybridBridgeMediaFiles_v2583)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2583",
          ).WAWebWindowsHybridBridgeSharesheet_v2583)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2583",
          ).WindowsHybridAppActivationBridge_v2583)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2583",
          ).WindowsHybridBridgeNativeAppState_v2583)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2583",
          ).WindowsHybridBridgeSystemIntegrations_v2583)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2583",
          ).WindowsHybridBridgeBrowserExtensions_v2583)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2583",
          ).WindowsHybridBridgeSeamlessMigration_v2583)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2583",
          ).WindowsHybridBridgeMediaTranscoder_v2583)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2583",
          ).WindowsHybridBridgeAdv_v2583)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2583 = e;
  },
  98,
);
