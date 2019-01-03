function changeIndicatorLabel(newValue) {
	$.changeLabel.applyProperties({
		text: newValue
	});
}

function changeIDLabel(newValue) {
	$.changeID.applyProperties({
		text: newValue
	});
}

function doClick(e) {
	// This doesn't give us Accessibility Label not sure if this is a problem
	console.info('JSON.stringify(e):\n' + JSON.stringify(e));
	changeIndicatorLabel(String(e.source.accessibilityLabel));
	changeIDLabel(String(e.source.id));
	if (e.source.id == 'view2' || e.source.id == 'heyLabel') alert('You clicked view2 or heyLabel');
}

function init() {
	$.index.open();
	$.label1.applyProperties({
		accessibilityLabel: "Label1"
	});
	$.labelInView.accessibilityLabel = 'labelInView';
	$.textField.accessibilityLabel = 'textField';
	$.TFInView.accessibilityLabel = 'TFInView';
}

init();