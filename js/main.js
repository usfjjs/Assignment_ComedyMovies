/**
    Author: Jhoan J. Sanchez
    Date: 01/19/2025
    Description: HTML page for ISM 6225. Project 2. Theme is Comedy Movies.
 */
function MovieChart() {
  document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('comedyChart').getContext('2d');

    const data = {
      labels: [
        '2015 - Pitch Perfect 2', '2016 - Deadpool', '2017 - Jumanji', '2018 - Deadpool 2', '2019 - Jumanji'
      ],
      datasets: [
        {
          label: 'Highest Grossing Comedy Movies (in Millions)',
          data: [
            287,
            782,
            380,
            734,
            800
          ],
          backgroundColor: [
            'rgba(142, 90, 6, 0.7)',
            'rgba(73, 144, 6, 0.7)',
            'rgba(5, 151, 143, 0.7)',
            'rgba(43, 8, 112, 0.7)',
            'rgba(134, 7, 34, 0.7)'
          ],
          borderColor: [
            'rgba(142, 90, 6, 0.7)',
            'rgba(73, 144, 6, 0.7)',
            'rgba(5, 151, 143, 0.7)',
            'rgba(43, 8, 112, 0.7)',
            'rgba(134, 7, 34, 0.7)'
          ],
          borderWidth: 1
          }
      ]
    };

    new Chart(ctx, config);
  });
}
