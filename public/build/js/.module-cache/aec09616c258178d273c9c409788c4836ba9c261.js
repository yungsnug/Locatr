var Locatns = React.createClass({displayName: "Locatns",
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt'))
        };
    },
    render: function() {
        return (
            React.createElement("div", {className: "sectionCont row"}, 
                React.createElement("div", {className: "profileTitle row"}, "LOCATNS"), 
                this.data.locatns.map(function(locatn) {
                    return React.createElement(LocatnRow, {locatn: locatn, key: locatn.id})
                })
            )
        );
    }
});

