import { ref, computed } from 'vue';
import database from '../data/db.json';

export function useData() {
  const courses = ref(database.courses);
  const siteConfig = ref(database.siteConfig);
  const sponsors = ref(database.sponsors);

  // Lógica de filtrado
  const getCourseById = (id) => {
    return courses.value.find(c => c.id === parseInt(id));
  };
  const calculateDiscount = (course) => {
    if (course.discount && course.discount > 0) {
      return course.price - (course.price * course.discount) / 100;
    }
    return course.price;
    }   

  // En el futuro, aquí reemplazarás 'database' por llamadas a Supabase (fetch)
  return {
    courses,
    siteConfig,
    sponsors,
    getCourseById,
    calculateDiscount
  };
}