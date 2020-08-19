var id = context.getVariable( "personId" );
var persons = JSON.parse( context.getVariable( "persons") );
var arr = persons.persons;
// print( "persons-before: " + JSON.stringify(arr));
for ( i=0; i<arr.length; i++ ) {
	 if( arr[i].id == id ) {
		 print( "Deleting " + JSON.stringify(arr[i]) );
		 found = true;
		 person = arr[i];
		 arr.splice(i,1);
		 context.setVariable( "person", JSON.stringify(person));
		 context.setVariable( "persons", JSON.stringify(persons));
		 break;
	 }
}
